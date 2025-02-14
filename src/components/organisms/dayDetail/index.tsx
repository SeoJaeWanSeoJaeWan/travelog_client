import ListLayout from "@/components/modelcules/listLayout";
import Pin from "@/components/atoms/pin";
import DayDetailStyle from "./dayDetail.style";
import { FaPlus } from "react-icons/fa6";
import { DraggingProvider } from "@/hooks/utils/useDragging";
import Drag from "@/components/atoms/drag";

const DayDetail = () => {
  return (
    <ListLayout title={"Day 3"} price={10000000} onDelete={() => {}}>
      <DraggingProvider>
        <li>
          <Drag
            value={"1"}
            onChange={(value) => {
              console.log(value);
            }}
            onSubmit={() => {}}
          >
            <button>
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
