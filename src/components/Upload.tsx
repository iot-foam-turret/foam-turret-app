import React, { useState } from "react";
import { S3Image } from "aws-amplify-react";
import { StyledButton } from "./Button";

const imageTheme = {
  photoImg: {
    width: "80vw",
    maxWidth: "400px",
    textAlign: "center"
  },
  photo: {
    width: "80vw",
    margin: "auto"
  }
};

function Upload() {
  const [pickingImage, setPickingImage] = useState(false);
  const onLoad = () => {
    if (pickingImage) {
      setPickingImage(false);
    }
  };
  return (
    <>
      <StyledButton onClick={() => setPickingImage(!pickingImage)}>
        Change Target
      </StyledButton>
      <S3Image
        imgKey="bolo"
        picker={pickingImage}
        theme={imageTheme}
        onLoad={onLoad}
      />
    </>
  );
}

export default Upload;
