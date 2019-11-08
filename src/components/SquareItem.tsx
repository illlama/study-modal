import React from "react";
import styled from "styled-components";
import { Square } from "../contexts/SquareContext";

export const SquareShape = styled.div`
  width: 130px;
  height: ${(props: Square) => props.height}px;
  background-color: ${(props: Square) => props.color};
  margin: 10px 8px;
`;
const SquareItem = (props: { col: Square[] }) => {
  const squareOfCol = props.col.map(item => {
    return (
      <SquareShape
        key={item.Id}
        Id={item.Id}
        col={item.col}
        color={item.color}
        height={item.height}
      />
    );
  });

  return <div>{squareOfCol}</div>;
};

export default SquareItem;
