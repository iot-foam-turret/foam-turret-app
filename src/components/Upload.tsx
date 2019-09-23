import React, { useState } from "react";
import styled from "styled-components";
import { S3Image } from "aws-amplify-react";
import { StyledFilledButton } from "./Button";

const imageTheme = {
  photoImg: {
    width: "80vw",
    maxWidth: "400px",
    textAlign: "center",
    paddingTop: "10px"
  },
  photo: {
    textAlign: "center"
  }
};

const TargetContainer = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
`;


function Upload() {
  const [pickingImage, setPickingImage] = useState(false);
  const onLoad = () => {
    if (pickingImage) {
      setPickingImage(false);
    }
  };
  return (
    <>
      <TargetContainer>
        Current Target
        <S3Image
          imgKey="bolo"
          picker={pickingImage}
          theme={imageTheme}
          onLoad={onLoad}
        />
        <ButtonContainer>
          <StyledFilledButton className="filled" onClick={() => setPickingImage(!pickingImage)}>
            {pickingImage ? "CLOSE PICKER" : "CHANGE TARGET"}
          </StyledFilledButton>
        </ButtonContainer>
      </TargetContainer>
    </>
  );
}

export default Upload;
