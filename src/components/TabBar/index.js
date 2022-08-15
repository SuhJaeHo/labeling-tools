import React from "react";
import { tabImage } from "../../constants/assets";
import styled from "styled-components";

export default function TabBar() {
  const images = Object.keys(tabImage);

  return (
    <TabBarWrapper>
      {images.map((key) => (
        <button key={key}>
          <img src={tabImage[key]} alt={key} />
        </button>
      ))}
    </TabBarWrapper>
  );
}

const TabBarWrapper = styled.div`
  width: 100%;
  height: 40px;
  background: #ebedf2 0% 0% no-repeat padding-box;
  border: 1px solid #d5d9e2;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    background: transparent;
  }
`;
