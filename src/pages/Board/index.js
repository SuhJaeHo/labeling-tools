import React from "react";
import TabBar from "../../components/TabBar";
import MenuBar from "../../components/MenuBar";
import SideBar from "../../components/SideBar";
import styled from "styled-components";

export default function Board() {
  return (
    <BoardWrapper>
      <TabBar />
      <MenuBar />
      <SideBar />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
`;
