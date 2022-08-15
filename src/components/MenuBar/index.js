import React from "react";
import styled from "styled-components";

export default function MenuBar() {
  return <MenuBarWrapper></MenuBarWrapper>;
}

const MenuBarWrapper = styled.div`
  top: 40px;
  width: 100%;
  height: 64px;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  border: 1px solid #ebedf2;
`;
