import React from "react";
import img from "../images/img14.jpg";

function Story(props) {
  return (
    <>
      <span className="story-span1">
        <img className="story-img" src={img} alt="Story Image" />
      </span>
    </>
  );
}
export default Story;
