import React from "react";
import getPhotoAPI from "../../api/getPhotoAPI";
import styled from "styled-components";

export default function MenuBar({ getImage }) {
  const handleClickButton = async () => {
    const data = await getPhotoAPI();

    getImage(data);
  };

  return (
    <MenuBarWrapper>
      <button onClick={() => handleClickButton()}>Dataset Label</button>
    </MenuBarWrapper>
  );
}

const MenuBarWrapper = styled.div`
  width: 1920px;
  height: 64px;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  border: 1px solid #ebedf2;

  button {
    border: none;
  }
`;
