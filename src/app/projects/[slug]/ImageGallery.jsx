"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

export default function ImageGallery({ images }) {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="gap-x-[24px] gap-y-[24px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid"
    >
      {images.map((item, i) => (
        <a href={item} key={i}>
          <Image
            loading="lazy"
            width={800}
            height={800}
            alt="image"
            src={item}
            className="w-full aspect-square object-cover"
          />
        </a>
      ))}
    </LightGallery>
  );
}
