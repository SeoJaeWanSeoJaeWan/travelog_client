import PinType, { PinName } from "./pinType";
import PinUrl from "./pinUrl";
import PriceType from "./priceType";

export interface Pins {
  id: number;
  index: number;
  lat: number;
  lng: number;
  pinIndex: number;
  pinType: PinName;
}

interface Pin {
  id: number;
  lat: number;
  lng: number;
  title: string;
  description: string;
  picture: string;
  price: number;
  priceType: PriceType;
  pinType: PinType;
  index: number;
  pinUrl: PinUrl[];
}

export default Pin;
