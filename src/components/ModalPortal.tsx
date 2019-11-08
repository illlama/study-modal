import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";

const ModalPortal: React.FC = ({ children }) => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = document.createElement("div");

    el.id = "__modal-portal";
    document.body.appendChild(el);
    setNode(el);
  }, []);

  return <div>{children}</div>;
};

export default ModalPortal;
