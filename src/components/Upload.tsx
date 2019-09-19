import React, { useState } from "react";
import { S3Image } from "aws-amplify-react";
import styled from "styled-components";

const imageTheme = {
  photoImg: {
    width: "80vw"
  },
  photo: {
    width: "80vw",
    margin: "auto"
  }
};

const ShowPicker = styled.button``;

function Upload() {
  const [pickingImage, setPickingImage] = useState(false);
  const onLoad = () => {
    if (pickingImage) {
      setPickingImage(false);
    }
  };
  return (
    <>
      <ShowPicker onClick={() => setPickingImage(!pickingImage)}>
        Change Target
      </ShowPicker>
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
