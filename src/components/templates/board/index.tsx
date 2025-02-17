import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BoardStyle from "./board.style";
import { useState } from "react";
import Log from "@/components/organisms/log";
import DayList from "@/components/organisms/dayList";
import PinDetail from "@/components/organisms/pinDetail";
import DayDetail from "@/components/organisms/dayDetail";

const Board = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [step, setStep] = useState(0);

  const handleStep = (step: number) => {
    setStep(step);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BoardStyle.Container $isOpen={isOpen}>
      <Log />
      <BoardStyle.SecondTab>
        <DayList />
        {step === 2 && <DayDetail handleStep={handleStep} />}
        {step === 3 && <PinDetail handleStep={handleStep} />}
      </BoardStyle.SecondTab>
      <BoardStyle.ToggleButton onClick={handleToggle}>
        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </BoardStyle.ToggleButton>
    </BoardStyle.Container>
  );
};

export default Board;
