import React, { useEffect, useState, useRef } from "react";
import getNumberByPx from "../../../utils/getNumberByPx";
import styled from "styled-components";

const eventArray = [];

export default function WorkSpace({ currentMode, image }) {
  const [isDragStart, setIsDragStart] = useState(false);
  const [objects, setObjects] = useState([]);
  const [newObjectStartPoint, setNewObjectStartPoint] = useState({ startX: 0, startY: 0 });

  const createDiv = useRef();
  const objectDiv = useRef([]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "Backspace" && currentMode === "select" && objects.length !== 0) {
        const copiedObjects = objects.filter(object => !object.isSelected);
        setObjects(copiedObjects);
      }
    };

    eventArray.push(handleKeyDown);

    currentMode === "select" ? window.addEventListener("keydown", handleKeyDown) : window.removeEventListener("keydown", eventArray[eventArray.length - 2]);
  }, [currentMode]);

  const handleMouseUpAndDown = e => {
    if (currentMode === "create") {
      if (e._reactName === "onMouseDown") {
        setIsDragStart(true);
        setNewObjectStartPoint({ startX: e.clientX, startY: e.clientY });

        return;
      }

      const { left, top, width, height } = createDiv.current.style;

      const anchors = [];
      const { Left, Top, Width, Height } = getNumberByPx(left, top, width, height);

      anchors.push({ left: Left - 8 + "px", top: Top - 8 + "px" });
      anchors.push({ left: Left + Width / 2 - 8 + "px", top: Top - 8 + "px" });
      anchors.push({ left: Left + Width - 8 + "px", top: Top - 8 + "px" });
      anchors.push({ left: Left + Width - 8 + "px", top: Top + Height / 2 - 8 + "px" });
      anchors.push({ left: Left + Width - 8 + "px", top: Top + Height - 8 + "px" });
      anchors.push({ left: Left + Width / 2 - 8 + "px", top: Top + Height - 8 + "px" });
      anchors.push({ left: Left - 8 + "px", top: Top + Height - 8 + "px" });
      anchors.push({ left: Left - 8 + "px", top: Top + Height / 2 - 8 + "px" });

      setIsDragStart(false);
      setObjects([...objects, { left, top, width, height, isSelected: false, anchors }]);
    }

    if (currentMode === "select") {
      if (e._reactName === "onMouseDown") {
        setIsDragStart(true);
        setNewObjectStartPoint({ startX: e.clientX, startY: e.clientY });

        return;
      }

      setIsDragStart(false);
    }
  };

  const handleMouseMove = e => {
    if (isDragStart) {
      if (currentMode === "create") {
        const startX = e.clientX - newObjectStartPoint.startX < 0 ? e.clientX : newObjectStartPoint.startX;
        const startY = e.clientY - newObjectStartPoint.startY < 0 ? e.clientY : newObjectStartPoint.startY;
        const width = Math.abs(e.clientX - newObjectStartPoint.startX);
        const height = Math.abs(e.clientY - newObjectStartPoint.startY);

        createDiv.current.style = `left: ${startX}px; top: ${startY}px; width: ${width}px; height: ${height}px`;
      } else {
        objects.forEach((object, index) => {
          if (object.isSelected) {
            const Left = Number(object.left.slice(0, object.left.indexOf("p")));
            const Top = Number(object.top.slice(0, object.top.indexOf("p")));
            const startX = newObjectStartPoint.startX < e.clientX ? Left + e.clientX - newObjectStartPoint.startX + "px" : Left - (newObjectStartPoint.startX - e.clientX) + "px";
            const startY = newObjectStartPoint.startY < e.clientY ? Top + e.clientY - newObjectStartPoint.startY + "px" : Top - (newObjectStartPoint.startY - e.clientY) + "px";

            objectDiv.current[index].style = `left: ${startX}; top: ${startY}; width: ${object.width}; height: ${object.height}`;
          }
        });
      }
    }
  };

  const handleMouseClick = e => {
    if (currentMode === "select") {
      const copiedObjects = [...objects];

      copiedObjects.forEach(object => {
        const { Left, Top, Width, Height } = getNumberByPx(object.left, object.top, object.width, object.height);

        if (e.clientX >= Left && e.clientX < Left + Width && e.clientY >= Top && e.clientY <= Top + Height) object.isSelected = !object.isSelected;
      });

      setObjects(copiedObjects);
    }
  };

  return (
    <WorkSpaceWrapper>
      {isDragStart && <div ref={createDiv} className="newObject" onMouseUp={e => handleMouseUpAndDown(e)}></div>}
      <img src={image.url} alt={image.title} onMouseDown={e => handleMouseUpAndDown(e)} onMouseMove={e => handleMouseMove(e)} onMouseUp={e => handleMouseUpAndDown(e)} />
      {objects.map(({ left, top, width, height, isSelected, anchors }, index) => (
        <div ref={elem => (objectDiv.current[index] = elem)} className="object" style={{ left, top, width, height }} onClick={e => handleMouseClick(e)} onMouseDown={e => handleMouseUpAndDown(e)} key={index}>
          {isSelected && anchors.map(({ left, top }, index) => <div className="anchor" style={{ left, top }} key={index}></div>)}
        </div>
      ))}
    </WorkSpaceWrapper>
  );
}

const WorkSpaceWrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;

  img {
    -webkit-user-drag: none;
  }

  .object {
    position: fixed;
    border: 1px solid #66b5ff;
    background: var(--unnamed-color-5668d9) 0% 0% no-repeat padding-box;
    background: #5668d9 0% 0% no-repeat padding-box;
    opacity: 0.2;
    z-index: 1;
  }

  .newObject {
    position: fixed;
    border: 1px solid #66b5ff;
    background: var(--unnamed-color-5668d9) 0% 0% no-repeat padding-box;
    background: #5668d9 0% 0% no-repeat padding-box;
    opacity: 0.2;
  }

  .anchor {
    position: fixed;
    width: 16px;
    height: 16px;
    border: 3px solid var(--unnamed-color-5668d9);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 3px solid #5668d9;
    opacity: 1;
  }
`;
