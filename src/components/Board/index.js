import React, { useState } from "react";
import SideBar from "./SideBar";
import WorkSpace from "./WorkSpace";
import styled from "styled-components";

export default function Board({ image }) {
  const [mode, setMode] = useState("select");

  return (
    <BoardWrapper>
      <SideBar currentMode={mode} changeMode={setMode} />
      <WorkSpace currentMode={mode} image={image} />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.div`
  width: 1920px;
  height: 976px;
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
`;
