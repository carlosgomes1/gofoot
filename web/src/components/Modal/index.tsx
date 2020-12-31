import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

import { Container } from "./styles";

interface ModalProps {
  display: boolean;
  description: string;
  item: string;
  confirm: string;
}

const Modal: React.FC<ModalProps> = ({
  display,
  item,
  description,
  confirm,
}) => {
  return (
    <Container style={{ display: display ? "none" : "block" }}>
      <p>
        {description} <span>{item}</span>.<h1> {confirm}</h1>?
      </p>
      <div>
        <FiX size={36} />
        <FiCheck size={36} />
      </div>
    </Container>
  );
};

export default Modal;
