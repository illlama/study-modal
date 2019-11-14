import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import { ChromePicker } from "react-color";
import {
  useColsState,
  useColsDispatch,
  ADD_SQUARE
} from "../contexts/SquareContext";

export const ModalEntire = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  zindex: 1;
`;
export const ModalBox = styled.div`
  background: white;
  width: 540px;
  height: 300px;
`;
export const ModalHeader = styled.div`
  background: #d9d3e2;
  width: 180px;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid;
  :hover {
    background: #d2c8e1;
    cursor: pointer;
  }
  background: ${props => (props.id === props.title ? "#d2c8e1" : "#d9d3e2")};
`;
export const ModalHeaderBox = styled.div`
  display: flex;
`;

export const Color = styled.button`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${props => props.color};
  border: 0px solid;
  cursor: pointer;
`;
export const Swatch = styled.div`
  margin-bottom: 20px;
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`;
export const Popover = styled.div`
  position: absolute;
  zindex: 2;
`;
export const Cover = styled.div`
  marign-left: 30px;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
export const AlignInput = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyModal = ({ onDisplay }: any) => {
  const [decideColor, setDecideColor] = useState(false);
  const [newColor, setNewColor] = useState("#111");
  const [newHeight, setNewHeight] = useState("");
  const [selCol, setSelCol] = useState("col1");
  const cols = useColsState();
  const dispatch = useColsDispatch();
  const stopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const handleClick = () => {
    setDecideColor(!decideColor);
  };
  const handleSubmit = () => {
    let colNum = 0;
    if (selCol === "col2") {
      colNum = 1;
    } else if (selCol === "col3") {
      colNum = 2;
    } else {
      colNum = 0;
    }
    const nextIds = cols[colNum].map(square => square.Id);
    const id = nextIds[nextIds.length - 1] + 1;
    dispatch({
      type: ADD_SQUARE,
      Id: id,
      col: colNum + 1,
      color: newColor,
      height: Number(newHeight)
    });
    onDisplay();
  };
  const handleChange = (color: any) => {
    setNewColor(color.hex);
  };
  const handleHeight = (e: any) => {
    setNewHeight(e);
  };
  const colSelected = (e: string) => {
    setSelCol(e);
  };

  return (
    <ModalEntire onClick={onDisplay}>
      <Draggable>
        <ModalBox onClick={stopClick}>
          <ModalHeaderBox>
            <ModalHeader
              onClick={e => colSelected("col1")}
              id="col1"
              title={selCol}
            >
              col1
            </ModalHeader>
            <ModalHeader
              onClick={e => colSelected("col2")}
              id="col2"
              title={selCol}
            >
              col2
            </ModalHeader>
            <ModalHeader
              onClick={e => colSelected("col3")}
              id="col3"
              title={selCol}
            >
              col3
            </ModalHeader>
          </ModalHeaderBox>
          <br />
          <AlignInput>
            <p>색상: &nbsp;&nbsp;</p>
            <Swatch onClick={handleClick}>
              <Color color={newColor} />
            </Swatch>
            {decideColor ? (
              <Popover>
                <Cover onClick={handleClick} />
                <ChromePicker color={newColor} onChange={handleChange} />
              </Popover>
            ) : null}
          </AlignInput>
          <br />
          <AlignInput>
            <p>높이:&nbsp;&nbsp;</p>
            <input
              className="InputTag"
              defaultValue={newHeight}
              placeholder="100"
              onChange={e => handleHeight(e.target.value)}
              onMouseDown={e => e.stopPropagation()}
            />
          </AlignInput>
          <br />
          <button onClick={handleSubmit}>만들기</button>
          <br />
          <button onClick={onDisplay}>닫기</button>
        </ModalBox>
      </Draggable>
    </ModalEntire>
  );
};

export default MyModal;
