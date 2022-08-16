import React from "react";
import styled from "styled-components";

export default function WorkSpace({ currentMode, image }) {
  return (
    <WorkSpaceWrapper>
      <img src={image.url} alt={image.title} />
    </WorkSpaceWrapper>
  );
}

const WorkSpaceWrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
`;
