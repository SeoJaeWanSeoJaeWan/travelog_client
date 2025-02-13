import { PropsWithChildren } from "react";
import Title from "../../atoms/title";
import ListLayoutStyle from "./listLayout.style";
import LineStyle from "@/components/atoms/line/line.style";
import Close from "@/components/atoms/close";
import numberWithCommas from "@/utils/numberWithCommas";

interface ListLayoutProps extends PropsWithChildren {
  title: string;
  price: number;
  onClose?: () => void;
}

const ListLayout = (props: ListLayoutProps) => {
  const { title, price, children, onClose } = props;
  return (
    <ListLayoutStyle.Conatiner>
      <Title as={"h3"} width={"90%"}>
        {title}
      </Title>
      <LineStyle />

      <ListLayoutStyle.TotalPrice>
        여행 경비 : <strong>{numberWithCommas(price)}원</strong>
      </ListLayoutStyle.TotalPrice>

      <ListLayoutStyle.List>{children}</ListLayoutStyle.List>

      <Close onClick={onClose} />
    </ListLayoutStyle.Conatiner>
  );
};

export default ListLayout;
