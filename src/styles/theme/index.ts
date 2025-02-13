export const color = {
  black: "#0e100f",
  white: "#ffffff",
  darkGray: "#A0A0A0",
  gray: "#E0E0E0",
  lightGray: "#F5F5F5",

  shadow: "rgba(0, 0, 0, 0.5)",
};

export const media = {
  mobile: "767px",
  tablet: "1120px",
  notebook: "1680px",
};

export const font = (px: number) => {
  return `${px / 16}rem`;
};

export type ColorType = typeof color;
export type MediaType = typeof media;
export type FontType = typeof font;
