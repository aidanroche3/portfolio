import React, { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { FaMapMarkerAlt } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";

function Gallery() {
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const images = [
    {
      original: "personal/london.jpg",
    },
    {
      original: "personal/pisa.jpg",
    },
    {
      original: "personal/wimbledon.jpg",
    },
    {
      original: "personal/scotland.jpg",
    },
    {
      original: "personal/oslo.JPEG",
    },
    {
      original: "personal/romeflag.jpg",
    },
    {
      original: "personal/hollywood.jpg",
    },
    {
      original: "personal/venice.jpg",
    },
    {
      original: "personal/arthursseat.jpg",
    },
    {
      original: "personal/colosseum.jpg",
    },
  ];

  const descriptions = [
    "London, England",
    "Pisa, Italy",
    "Wimbledon, England",
    "St. Andrews, Scotland",
    "Oslo, Norway",
    "Rome, Italy",
    "Hollywood, California",
    "Venice, Italy",
    "Edinburgh, Scotland",
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
