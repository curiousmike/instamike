import { useState } from "react";

import { Container, ImageContainer } from "./styles";

function SinglePostImage({ imgSrc, onImageClick, isProfile }) {
  const [aspectRatio, setAspectRatio] = useState("horiz");
  const onImageLoad = (img) => {
    if (img.target.offsetHeight > img.target.offsetWidth) {
      setAspectRatio("vert");
    } else {
      setAspectRatio("horiz");
    }
  };
  const heightToUse = isProfile ? "63vh" : "78vh";
  return (
    <Container>
      <ImageContainer>
        <img
          alt="my alt"
          onLoad={onImageLoad}
          style={{
            maxHeight: heightToUse,
            minHeight: aspectRatio === "vert" ? heightToUse : "",
            maxWidth: "90%",
            minWidth: aspectRatio === "horiz" ? "60vw" : "1vw",
          }}
          src={imgSrc}
          onClick={onImageClick}
        ></img>
      </ImageContainer>
    </Container>
  );
}

export default SinglePostImage;
