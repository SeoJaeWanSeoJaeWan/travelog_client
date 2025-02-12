import Day, { Days } from "./day";

export interface Logs {
  id: number;
  title: string;
  key: string;
  days: Days[];
}

export interface Log {
  id: number;
  title: string;
  key: string;
  days: Day[];
}
