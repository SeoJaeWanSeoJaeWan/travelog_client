import { PinName } from "@/types/apis/pinType";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBus, FaPersonRunning, FaTaxi, FaTrainSubway } from "react-icons/fa6";
import { IoMdCafe, IoMdGlasses } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import PinStyle from "./pin.style";
import { IconType } from "react-icons";

export const Pins: Record<PinName, IconType> = {
  식사: MdFastfood,
  숙박: FaHome,
  카페: IoMdCafe,
  관광지: IoMdGlasses,
  쇼핑: FaShoppingCart,
  버스: FaBus,
  지하철: FaTrainSubway,
  비행기: IoAirplane,
  택시: FaTaxi,
  도보: FaPersonRunning,
};

interface PinProps {
  name: PinName;
  width: string;
}

const Pin = (props: PinProps) => {
  const { name, width } = props;

  const Icon = Pins[name];

  return (
    <PinStyle.Container $width={width}>
      <Icon size={20} />
    </PinStyle.Container>
  );
};

export default Pin;
