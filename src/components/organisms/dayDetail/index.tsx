import ListLayout from "@/components/modelcules/listLayout";
import Pin from "@/components/atoms/pin";

const DayDetail = () => {
  return (
    <ListLayout title={"Day 3"} price={10000000}>
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
    </ListLayout>
  );
};

export default DayDetail;
