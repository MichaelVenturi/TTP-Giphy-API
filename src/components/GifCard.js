import React from "react";
import Image from 'react-bootstrap/Image';

function GifCard(props) {
  return (
    <div>
      <Image src={props.url} alt="gif" rounded/>
    </div>
  );
}

export default GifCard;
