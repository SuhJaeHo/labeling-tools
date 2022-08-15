import React from "react";
import { modeImage } from "../../constants/assets";
import styled from "styled-components";

export default function SideBar() {
  const images = Object.keys(modeImage);

  return (
    <SideBarWrapper>
      {images.map((key) => (
        <button key={key}>
          <img src={modeImage[key]} alt={key} />
        </button>
      ))}
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  top: 104px;
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
`;
