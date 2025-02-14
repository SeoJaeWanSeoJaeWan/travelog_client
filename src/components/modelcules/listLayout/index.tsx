import { PropsWithChildren } from "react";
import Title from "../../atoms/title";
import ListLayoutStyle from "./listLayout.style";
import Line from "@/components/atoms/line/line.style";
import Close from "@/components/atoms/close";
import numberWithCommas from "@/utils/numberWithCommas";
import { MdDelete } from "react-icons/md";

interface ListLayoutProps extends PropsWithChildren {
  title: string;
  price: number;
  onClose?: () => void;
  onDelete: () => void;
}

const ListLayout = (props: ListLayoutProps) => {
  const { title, price, children, onClose, onDelete } = props;
  return (
    <ListLayoutStyle.Conatiner>
      <Title as={"h3"} width={"90%"}>
        {title}
      </Title>
      <Line />

      <ListLayoutStyle.PriceLine>
        <ListLayoutStyle.TotalPrice>
          여행 경비 : <strong>{numberWithCommas(price)}원</strong>
        </ListLayoutStyle.TotalPrice>

        <ListLayoutStyle.DeleteButton onClick={onDelete}>
          <MdDelete size={18} />
        </ListLayoutStyle.DeleteButton>
      </ListLayoutStyle.PriceLine>

      <ListLayoutStyle.List>{children}</ListLayoutStyle.List>

      <Close onClick={onClose} />
    </ListLayoutStyle.Conatiner>
  );
};

export default ListLayout;
