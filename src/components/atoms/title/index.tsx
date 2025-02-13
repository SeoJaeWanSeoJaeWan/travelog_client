import { PropsWithChildren } from "react";
import TitleStyle from "./title.style";

interface TitleProps extends PropsWithChildren {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  width: string;
}

const Title = (props: TitleProps) => {
  const { as, className, width, children } = props;

  return (
    <TitleStyle.Container as={as} className={className} $width={width}>
      {children}
    </TitleStyle.Container>
  );
};

export default Title;
