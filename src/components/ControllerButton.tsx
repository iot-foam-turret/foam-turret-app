import React from "react";
import styled from "styled-components";
import * as Breakpoints from "../styles/breakpoints";

const buttonSize = 90;

const Button = styled.button`
  height: ${buttonSize * 0.75}px;
  width: ${buttonSize * 0.75}px;
  border-radius: ${buttonSize / 2}px;
  margin: ${buttonSize / 12}px;
  border: 2px solid white;
  background: black;
  color: white;
  font-size: ${buttonSize / 8}px;

  :active {
    background: gray;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 15px cyan;
  }

  @media (min-width: ${Breakpoints.medium}px) {
    height: ${buttonSize}px;
    width: ${buttonSize}px;
    margin: ${buttonSize / 4}px;
    font-size: ${buttonSize / 4}px;
  }
`;

const ControllerButton: React.FC<{
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ControllerButton;
