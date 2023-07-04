import React from "react";

function Project({ title, image }) {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Project;
