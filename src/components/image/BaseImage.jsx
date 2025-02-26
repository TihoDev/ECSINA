import Image from "next/image";
import React from "react";

const BaseImage = ({
  imageUrl = "",
  alt = "",
  width = 50,
  height = 50,
  priority = true,
}) => {
  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};

export default BaseImage;
