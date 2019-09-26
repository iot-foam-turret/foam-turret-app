import React, { useState } from "react";
import styled from "styled-components";
import { S3Image } from "aws-amplify-react";
import { StyledFilledButton } from "./Button";
import AmplifyTheme from "../styles/amplify-theme";

const imageTheme = (hideImage: Boolean) => ({
  ...AmplifyTheme,
  photoImg: {
    width: "80vw",
    maxWidth: "400px",
    textAlign: "center",
    paddingTop: "10px",
    display: hideImage ? "none" : "inline-block"
  },
  photo: {
    textAlign: "center"
  },
  formContainer: {
    margin: "0"
  }
});

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
          theme={imageTheme(pickingImage)}
          onLoad={onLoad}
        />
        <ButtonContainer>
          <StyledFilledButton
            className="filled"
            onClick={() => setPickingImage(!pickingImage)}
          >
            {pickingImage ? "CLOSE PICKER" : "CHANGE TARGET"}
          </StyledFilledButton>
        </ButtonContainer>
      </TargetContainer>
    </>
  );
}

export default Upload;
