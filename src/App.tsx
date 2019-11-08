import React, { useState } from "react";
import AddButton from "./components/AddButton";
import SquareList from "./components/SquareList";
import { ColsContextProvider } from "./contexts/SquareContext";
import ModalPortal from "./components/ModalPortal";
import MyModal from "./components/MyModal";

const App = () => {
  const [display, setDisplay] = useState(false);
  const onDisplay = () => {
    setDisplay(!display);
    return false;
  };
  return (
    <ColsContextProvider>
      <h3>사각형을 추가하세요!</h3>
      <SquareList />
      <AddButton onDisplay={onDisplay} />
      {display ? (
        <ModalPortal>
          <MyModal onDisplay={onDisplay} />
        </ModalPortal>
      ) : null}
    </ColsContextProvider>
  );
};

export default App;
