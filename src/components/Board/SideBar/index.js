import React from "react";
import { modeImage } from "../../../constants/assets";
import styled from "styled-components";

export default function SideBar({ currentMode, changeMode }) {
  const images = Object.keys(modeImage);

  const handleButtonClick = ({ mode }) => {
    if (currentMode !== mode) changeMode(mode);
  };

  return (
    <SideBarWrapper>
      {images.map((mode) => (
        <button
          className={currentMode === mode ? "active" : "notActive"}
          key={mode}
          onClick={() => handleButtonClick({ mode })}
        >
          <img src={modeImage[mode]} alt={mode} />
        </button>
      ))}
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  width: 56px;
  height: 976px;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  border: 1px solid #ebedf2;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    margin: 8px;
    background: transparent;
  }

  .active {
    background: #e6e6e6;
  }

  .notActive {
    background: transparent;
  }
`;
