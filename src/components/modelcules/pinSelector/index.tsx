import Pin from "@/components/atoms/pin";
import PinSelectorStyle from "./pinSelector.style";
import usePinType from "@/hooks/apis/pinType/query/usePinType";

interface PinSelectorProps {
  className?: string;
  onClick: (id: number) => void;
}

const PinSelector = (props: PinSelectorProps) => {
  const {
    className,
    //
    onClick,
  } = props;

  const query = usePinType();

  if (!query.isSuccess) return null;

  return (
    <PinSelectorStyle.Container className={className}>
      {query.data.map(({ name, id }) => (
        <button key={id} onClick={() => onClick(id)}>
          <Pin name={name} width={"30px"} />
        </button>
      ))}
    </PinSelectorStyle.Container>
  );
};

export default PinSelector;
