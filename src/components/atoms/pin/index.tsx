import { PinName } from "@/types/apis/pinType";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBus, FaPersonRunning, FaTaxi, FaTrainSubway } from "react-icons/fa6";
import { IoMdCafe, IoMdGlasses } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

const Pins = {
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
} as const;

interface PinProps {
  name: PinName;
}

const Pin = (props: PinProps) => {
  const { name } = props;

  const Icon = Pins[name];

  return <Icon size={20} />;
};

export default Pin;
