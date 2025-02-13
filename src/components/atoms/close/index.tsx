import { CgClose } from "react-icons/cg";
import CloseStyle from "./close.style";
import { ButtonHTMLAttributes } from "react";

const Close = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <CloseStyle.Container {...props}>
      <CgClose />
    </CloseStyle.Container>
  );
};

export default Close;
