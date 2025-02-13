import DayDetailStyle from "./dayDetail.style";
import ListLayout from "@/components/modelcules/listLayout";
import Pin from "@/components/atoms/pin";

const DayDetail = () => {
  return (
    <ListLayout title={"Day 3"} price={10000000}>
      <li>
        <DayDetailStyle.Pin>
          <Pin name="식사" />
        </DayDetailStyle.Pin>
      </li>
      <li>
        <DayDetailStyle.Pin>
          <Pin name="숙박" />
        </DayDetailStyle.Pin>
      </li>
      <li>
        <DayDetailStyle.Pin>
          <Pin name="카페" />
        </DayDetailStyle.Pin>
      </li>
    </ListLayout>
  );
};

export default DayDetail;
