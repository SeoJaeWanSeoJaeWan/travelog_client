import Pin, { Pins } from "./pin";

export interface Days {
  id: number;
  index: number;
  pins: Pins[];
  dayPriceSummary: number;
}

export interface Day {
  id: number;
  pins: Pins[];
  index: number;
}

export interface PrintDay {
  pins: Pin[];
  index: number;
  dayPriceSummary: number;
}

export default Day;
