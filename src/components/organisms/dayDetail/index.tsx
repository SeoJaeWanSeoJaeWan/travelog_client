import ListLayout from "@/components/modelcules/listLayout";
import Pin from "@/components/atoms/pin";
import DayDetailStyle from "./dayDetail.style";
import { FaPlus } from "react-icons/fa6";

const DayDetail = () => {
  return (
    <ListLayout title={"Day 3"} price={10000000} onDelete={() => {}}>
      <li>
        <button>
          <Pin name="식사" width={"30px"} />
        </button>
      </li>
      <li>
        <button>
          <Pin name="숙박" width={"30px"} />
        </button>
      </li>
      <li>
        <button>
          <Pin name="카페" width={"30px"} />
        </button>
      </li>

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
