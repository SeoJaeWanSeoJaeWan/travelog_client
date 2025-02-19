import Day, { Days, PrintDay } from "./day";

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
  logPriceSummary: number;
}

export interface PrintLog {
  title: string;
  days: PrintDay[];
  logPriceSummary: number;
}
