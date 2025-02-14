import Pin, { Pins } from "@/components/atoms/pin";
import PinSelectorStyle from "./pinSelector.style";
import { PinName } from "@/types/apis/pinType";

interface PinSelectorProps {
  className?: string;
}

const PinSelector = (props: PinSelectorProps) => {
  const { className } = props;

  return (
    <PinSelectorStyle.Container className={className}>
      {Object.keys(Pins).map((n) => (
        <button key={n}>
          <Pin name={n as PinName} width={"30px"} />
        </button>
      ))}
    </PinSelectorStyle.Container>
  );
};

export default PinSelector;
