import ListButtonStyle from "./listButton.style";

interface Button {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

interface ListButtonProps {
  buttons: Button[];
}

const ListButton = (props: ListButtonProps) => {
  const { buttons } = props;

  return (
    <ListButtonStyle.Container>
      {buttons.map(({ text, type, onClick }, idx) => (
        <ListButtonStyle.Button
          key={idx}
          type={type || "button"}
          onClick={onClick}
        >
          {text}
        </ListButtonStyle.Button>
      ))}
    </ListButtonStyle.Container>
  );
};

export default ListButton;
