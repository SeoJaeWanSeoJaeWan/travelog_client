import PinType from "./pinType";
import PinUrl from "./pinUrl";

export interface Pins {
  id: number;
  index: number;
  lat: number;
  lng: number;
  pinIndex: number;
  pinType: string;
}

interface Pin {
  id: number;
  lat: number;
  lng: number;
  title: string;
  description: string;
  picture: string;
  price: number;
  priceType: string;
  pinType: PinType;
  index: number;
  pinUrl: PinUrl[];
}

export default Pin;
