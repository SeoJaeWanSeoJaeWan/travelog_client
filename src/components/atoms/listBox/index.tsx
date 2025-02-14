import ListButtonStyle from "./listButton.style";

interface Button {
  text: string;
  onClick: () => void;
}

interface ListButtonProps {
  buttons: Button[];
}

const ListButton = (props: ListButtonProps) => {
  const { buttons } = props;

  return (
    <ListButtonStyle.Container>
      {buttons.map(({ text, onClick }, idx) => (
        <ListButtonStyle.Button key={idx} onClick={onClick}>
          {text}
        </ListButtonStyle.Button>
      ))}
    </ListButtonStyle.Container>
  );
};

export default ListButton;
