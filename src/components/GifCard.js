import React from "react";

function GifCard(props) {
  return (
    <div>
      <img src={props.url} alt="gif" />
    </div>
  );
}

export default GifCard;
