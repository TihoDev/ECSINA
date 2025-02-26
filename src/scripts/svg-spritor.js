const path = require("node:path");
const process = require("node:process");
const glob = require("glob");
const fsExtra = require("fs-extra");
const { parse } = require("node-html-parser");
const fs = require("fs").promises;

async function main() {
  const cwd = process.cwd();
  const inputDir = path.join(cwd, "public", "icons");
  const outputDir = path.join(cwd, "public", "assets", "icons");
  await fsExtra.ensureDir(outputDir); // Ensure the output directory exists

  const files = glob
    .sync("*.svg", {
      cwd: inputDir,
    })
    .sort((a, b) => a.localeCompare(b));

  if (files.length === 0) {
    console.log(`No SVG files found in specified directory: ${inputDir}`);
    process.exit(0);
  }

  const spritesheetContent = await generateSvgSprite({
    files,
    inputDir,
  });
  await writeIfChanged(path.join(outputDir, "sprite.svg"), spritesheetContent);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function generateSvgSprite({ files, inputDir }) {
  const symbols = await Promise.all(
    files.map(async (file) => {
      const input = await fs.readFile(path.join(inputDir, file), "utf8");
      const root = parse(input);
      const svg = root.querySelector("svg");
      svg.querySelectorAll("path").forEach((path) => {
        path.removeAttribute("stroke-width");
        if (!file.includes("-colorize")) {
          path.removeAttribute("stroke");
          path.removeAttribute("fill");
        }
      });

      if (!svg) throw new Error("No SVG element found");
      svg.tagName = "symbol";
      svg.setAttribute("id", file.replace(/\.svg$/, ""));
      svg.removeAttribute("xmlns");
      svg.removeAttribute("xmlns:xlink");
      svg.removeAttribute("version");
      svg.removeAttribute("width");
      svg.removeAttribute("height");
      if (!file.includes("-colorize")) {
        svg.removeAttribute("stroke");
        svg.removeAttribute("fill");
      }
      return svg.toString().trim();
    })
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">`,
    `<defs>`,
    ...symbols,
    `</defs>`,
    `</svg>`,
  ].join("\n");
}

async function writeIfChanged(filepath, newContent) {
  try {
    const currentContent = await fs.readFile(filepath, "utf8");
    if (currentContent !== newContent) {
      await fs.writeFile(filepath, newContent, "utf8");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      // File does not exist, so write the new content
      await fs.writeFile(filepath, newContent, "utf8");
    } else {
      throw error;
    }
  }
}
