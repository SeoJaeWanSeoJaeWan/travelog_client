import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BoardStyle from "./board.style";
import { useState } from "react";
import Log from "@/components/organisms/log";
import Day from "@/components/organisms/day";
import Pin from "@/components/organisms/pin";

const Board = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BoardStyle.Container $isOpen={isOpen}>
      <Log />
      <BoardStyle.SecondTab>
        <Day />
        <Pin />
      </BoardStyle.SecondTab>
      <BoardStyle.ToggleButton onClick={handleToggle}>
        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </BoardStyle.ToggleButton>
    </BoardStyle.Container>
  );
};

export default Board;
