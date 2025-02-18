export const color = {
  primary: "#A7C7E7",
  black: "#0e100f",
  white: "#ffffff",
  red: "#ff0000",
  darkGray: "#A0A0A0",
  gray: "#E0E0E0",
  lightGray: "#F5F5F5",

  shadow: "rgba(0, 0, 0, 0.3)",
  darkShadow: "rgba(0, 0, 0, 0.7)",
};

export const media = {
  mobile: "767px",
  tablet: "1120px",
  notebook: "1680px",
  desktop: "1921px",
};

export const font = (px: number) => {
  return `${px / 16}rem`;
};

export type ColorType = typeof color;
export type MediaType = typeof media;
export type FontType = typeof font;
