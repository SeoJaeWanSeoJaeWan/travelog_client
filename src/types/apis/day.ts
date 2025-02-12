import { Pins } from "./pin";

export interface Days {
  index: number;
  pins: Pins[];
}

export interface Day {
  id: number;
  pins: Pins[];
  dayIndex: number;
}

export default Day;
