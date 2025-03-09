import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Get the configuration array from compat.extends()
const eslintConfig = compat.extends("next/core-web-vitals");

// Export the ESLint config directly
export default eslintConfig;
