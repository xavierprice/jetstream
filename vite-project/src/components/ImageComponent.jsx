import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, hashSrc, className, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <>
      <div
        className={className}
        style={{ display: imageLoaded ? "none" : "inline" }}
      >
        <Blurhash
          hash={hashSrc}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>

      <img
        src={src}
        alt={alt}
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
    </>
  );
};

export default ImageComponent;
