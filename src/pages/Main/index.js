import React, { useState } from "react";
import TabBar from "../../components/TabBar";
import MenuBar from "../../components/MenuBar";
import Board from "../../components/Board";
import styled from "styled-components";

export default function Main() {
  const [image, setImage] = useState({});

  return (
    <MainWrapper>
      <TabBar />
      <MenuBar getImage={setImage} />
      <Board image={image} />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 1920px;
  height: 1080px;
  background: #ffffff 0% 0% no-repeat padding-box;
`;
