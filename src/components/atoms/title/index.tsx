import { PropsWithChildren } from "react";
import TitleStyle from "./title.style";

interface TitleProps extends PropsWithChildren {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

const Title = (props: TitleProps) => {
  const { as, className, children } = props;

  return (
    <TitleStyle.Container as={as} className={className}>
      {children}
    </TitleStyle.Container>
  );
};

export default Title;
