import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BoardStyle from "./board.style";
import { useState } from "react";
import Log from "@/components/organisms/log";
import DayList from "@/components/organisms/dayList";
import PinDetail from "@/components/organisms/pinDetail";
import DayDetail from "@/components/organisms/dayDetail";
import Search from "@/components/atoms/search";

export type BoardType = "show" | "hide" | "out";

const Board = () => {
  const [type, setType] = useState<BoardType>("show");

  const isOpen = type === "show";

  const handleToggle = () => {
    setType((prev) => (prev === "show" ? "hide" : "show"));
  };

  const onOutBoard = () => {
    setType("out");
  };

  const onShowBoard = () => {
    setType("show");
  };

  return (
    <>
      <BoardStyle.Container $type={type}>
        <Log />
        <BoardStyle.SecondTab>
          <DayList />
          <DayDetail onOutBoard={onOutBoard} onShowBoard={onShowBoard} />
          <PinDetail onOutBoard={onOutBoard} onShowBoard={onShowBoard} />
        </BoardStyle.SecondTab>
        <BoardStyle.ToggleButton onClick={handleToggle}>
          {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </BoardStyle.ToggleButton>
      </BoardStyle.Container>
      {type === "out" && <Search />}
    </>
  );
};

export default Board;
