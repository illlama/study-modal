import React, { useState } from "react";
import styled from "styled-components";

export const AddButtonBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: #aca;
  position: fixed;
  bottom: 15%;
  right: 10%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: rotate(285deg);
  }
    transition: all 1s;
}
`;
export const AddButtonContent = styled.div`
  width: 5px;
  height: 30px;
  background-color: #fff;
  position: fixed;
  transform: ${(props: { primary: boolean }) =>
    props.primary ? "rotate(90deg)" : "rotate(0deg)"};
    
  }
`;

const AddButton = ({ onDisplay }: any) => {
  return (
    <div>
      <AddButtonBox onClick={onDisplay}>
        <AddButtonContent primary className="stick" />
        <AddButtonContent primary={false} className="stick" />
      </AddButtonBox>
    </div>
  );
};

export default AddButton;
