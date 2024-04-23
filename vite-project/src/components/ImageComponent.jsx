import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, hashSrc, className, alt, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width, height });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };

    function updateDimensions() {
      let newWidth = width;
      let newHeight = height;

      if (window.innerWidth < 498) {
        newWidth = width / 2;
        newHeight = height / 2;
      }

      setDimensions({ width: newWidth, height: newHeight });
    }

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [src, width, height]);

  return (
    <>
      <div
        className={className}
        style={{ display: imageLoaded ? "none" : "flex" }}
      >
        <Blurhash
          hash={hashSrc}
          width={dimensions.width}
          height={dimensions.height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{flex: 1}}
        />
      </div>

      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          display: !imageLoaded ? "none" : "inline",
        }}
      />
    </>
  );
};

export default ImageComponent;
