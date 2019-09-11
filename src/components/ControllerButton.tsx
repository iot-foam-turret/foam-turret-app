import React, { ReactNode } from "react";
import styled from "styled-components";

const buttonSize = 90;

const Button = styled.button`
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  border-radius: ${buttonSize / 2}px;
  margin: ${buttonSize / 4}px;
  border: 2px solid white;
  background: black;
  color: white;
  font-size: ${buttonSize / 4}px;

  :active {
    background: gray;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 15px cyan;
  }
`;

export default function ControllerButton({
  children,
  onClick
}: {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return <Button onClick={onClick}>{children}</Button>;
}
