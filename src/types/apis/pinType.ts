export type PinName =
  | "식사"
  | "숙박"
  | "카페"
  | "관광지"
  | "쇼핑"
  | "버스"
  | "지하철"
  | "비행기"
  | "택시"
  | "도보";

interface PinType {
  id: number;
  name: PinName;
  icon: string;
}

export default PinType;
