import React, { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Gallery() {
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const images = [
    {
      original: "edinburgh.jpg",
      thumbnail: "edinburgh.jpg",
    },
    {
      original: "rome.jpg",
      thumbnail: "rome.jpg",
    },
    {
      original: "rome.jpg",
      thumbnail: "rome.jpg",
    },
    {
      original: "paris.jpg",
      thumbnail: "paris.jpg",
    },
    {
      original: "paris.jpg",
      thumbnail: "paris.jpg",
    },
    {
      original: "projects/maze.gif",
      thumbnail: "rome.jpg",
    },
    {
      original: "rome.jpg",
      thumbnail: "rome.jpg",
    },
  ];

  const descriptions = [
    "Edinburgh, Scotland",
    "Paris, France",
    "______",
    "Test",
  ];

  function updateDescription() {
    console.log("here");
    if (descriptionIndex < descriptions.length - 1) {
      setDescriptionIndex(descriptionIndex + 1);
    } else {
      setDescriptionIndex(0);
    }
  }

  return (
    <div className="max-w-[600px] pt-10">
      <ReactImageGallery
        items={images}
        showThumbnails={false}
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        slideDuration={350}
        slideInterval={5000}
        onSlide={updateDescription}
      />
      <p className="font-bold text-center text-primary bg-slate-200 shadow-lg">
        {descriptions[descriptionIndex]}
      </p>
    </div>
  );
}

export default Gallery;
