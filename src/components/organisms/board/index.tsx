import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BoardStyle from "./board.style";
import { useState } from "react";
import Log from "@/components/modelcules/log";

const Board = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BoardStyle.Container $isOpen={isOpen}>
      <Log />
      <BoardStyle.ToggleButton onClick={handleToggle}>
        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </BoardStyle.ToggleButton>
    </BoardStyle.Container>
  );
};

export default Board;
