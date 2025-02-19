import { PropsWithChildren } from "react";
import InfoStyle from "./info.style";

const Info = (props: PropsWithChildren) => {
  const { children } = props;

  return <InfoStyle.Container>{children}</InfoStyle.Container>;
};

export default Info;
