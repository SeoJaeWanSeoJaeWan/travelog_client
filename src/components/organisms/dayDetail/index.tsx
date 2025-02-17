import ListLayout from "@/components/modelcules/listLayout";
import Pin from "@/components/atoms/pin";
import DayDetailStyle from "./dayDetail.style";
import { FaPlus } from "react-icons/fa6";
import Drag from "@/components/atoms/drag";
import { useState } from "react";

interface DayProps {
  handleStep: (step: number) => void;
}

const DayDetail = (props: DayProps) => {
  const { handleStep } = props;

  const [className, setClassName] = useState("");
  const [index, setIndex] = useState(3);

  const handleNext = () => {
    if (className === "hide") handleStep(index);
  };

  return (
    <ListLayout
      title={"Day 3"}
      price={10000000}
      onDelete={() => {}}
      onAnimationEnd={handleNext}
    >
      <DraggingProvider>
        <li>
          <Drag
            value={1}
            onChange={(value) => {
              console.log(value);
            }}
            onSubmit={() => {}}
          >
            <button
              onClick={() => {
                setIndex(3);
                setClassName("hide");
              }}
            >
              <Pin name="식사" width={"30px"} />
            </button>
          </Drag>
        </li>
      </DraggingProvider>

      <li>
        <button>
          <DayDetailStyle.AddPin>
            <FaPlus />
          </DayDetailStyle.AddPin>
        </button>
      </li>
    </ListLayout>
  );
};

export default DayDetail;
