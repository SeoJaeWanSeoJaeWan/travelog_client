import { PropsWithChildren, useRef } from "react";
import Title from "../../atoms/title";
import ListLayoutStyle from "./listLayout.style";
import Line from "@/components/atoms/line/line.style";
import Close from "@/components/atoms/close";
import numberWithCommas from "@/utils/numberWithCommas";
import { MdDelete } from "react-icons/md";

interface ListLayoutProps extends PropsWithChildren {
  title: string;
  price: number;
  onDelete: () => void;
  onAnimationEnd: () => void;
}

const ListLayout = (props: ListLayoutProps) => {
  const { title, price, children, onDelete, onAnimationEnd } = props;
  const listRef = useRef<HTMLDivElement>(null);

  const hideLayout = () => {
    if (listRef.current) {
      listRef.current.classList.add("hide");
    }
  };

  const handleAnimationEnd = (callback: () => void) => () => {
    if (listRef.current) {
      if (listRef.current.classList.contains("hide")) {
        listRef.current.classList.remove("hide");
        callback();
      }
    }
  };

  const handleDelete = () => {
    hideLayout();
    onDelete();
  };

  return (
    <ListLayoutStyle.Conatiner
      ref={listRef}
      onAnimationEnd={handleAnimationEnd(onAnimationEnd)}
    >
      <div>
        <Title as={"h3"} width={"90%"}>
          {title}
        </Title>
        <Line />

        <ListLayoutStyle.PriceLine>
          <ListLayoutStyle.TotalPrice>
            여행 경비 : <strong>{numberWithCommas(price || 0)}원</strong>
          </ListLayoutStyle.TotalPrice>

          <ListLayoutStyle.DeleteButton onClick={handleDelete}>
            <MdDelete size={18} />
          </ListLayoutStyle.DeleteButton>
        </ListLayoutStyle.PriceLine>

        <ListLayoutStyle.List>{children}</ListLayoutStyle.List>

        <Close onClick={hideLayout} />
      </div>
    </ListLayoutStyle.Conatiner>
  );
};

export default ListLayout;
