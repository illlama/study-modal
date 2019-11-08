import React from "react";
import SquareItem from "./SquareItem";
import styled from "styled-components";
import { useColsState } from "../contexts/SquareContext";

export const SquaresBox = styled.div`
  padding: 30px 100px;
  display: flex;
  justify-content: center;
`;

const SquareList = () => {
  const cols = useColsState();
  return (
    <SquaresBox>
      <SquareItem col={cols[0]} />
      <SquareItem col={cols[1]} />
      <SquareItem col={cols[2]} />
    </SquaresBox>
  );
};

export default SquareList;
