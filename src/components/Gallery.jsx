import React, { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { FaMapMarkerAlt } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";

function Gallery() {
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const images = [
    {
      original: "personal/london.jpg",
      thumbnail: "personal/london.jpg",
    },
    {
      original: "personal/pisa.jpg",
      thumbnail: "personal/pisa.jpg",
    },
    {
      original: "personal/wimbledon.jpg",
      thumbnail: "personal/wimbledon.jpg",
    },
    {
      original: "personal/scotland.jpg",
      thumbnail: "personal/scotland.jpg",
    },
    {
      original: "personal/rome.jpg",
      thumbnail: "personal/rome.jpg",
    },
    {
      original: "personal/hollywood.jpg",
      thumbnail: "personal/hollywood.jpg",
    },
    {
      original: "personal/venice.jpg",
      thumbnail: "personal/venice.jpg",
    },
    {
      original: "personal/colosseum.jpg",
      thumbnail: "personal/colosseum.jpg",
    },
  ];

  const descriptions = [
    "London, England",
    "Pisa, Italy",
    "Wimbledon, England",
    "St. Andrews, Scotland",
    "Rome, Italy",
    "Hollywood, California",
    "Venice, Italy",
    "Rome, Italy",
  ];

  function updateDescription() {
    if (descriptionIndex < descriptions.length - 1) {
      setDescriptionIndex(descriptionIndex + 1);
    } else {
      setDescriptionIndex(0);
    }
  }

  return (
    <div className="max-w-[600px] mt-10">
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
      <div className="flex flex-row gap-2 bg-slate-200 shadow-lg justify-center items-center">
        <FaMapMarkerAlt />
        <p className="font-bold text-center text-primary">
          {descriptions[descriptionIndex]}
        </p>
      </div>
    </div>
  );
}

export default Gallery;
