import { ElementType, FormEvent, useEffect, useRef } from "react";
import InputFormStyle from "./inputForm.style";
import { FaCheck } from "react-icons/fa6";

interface InputFormProps {
  type: "input" | "textarea";
  className: string;
  inputMode?: string;
  maxLength?: number;
  defaultValue?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const InputForm = (props: InputFormProps) => {
  const { type, className, defaultValue, maxLength, inputMode, onSubmit } =
    props;
  const ref = useRef<HTMLInputElement>(null);

  const Form = (
    type === "input" ? InputFormStyle.Input : InputFormStyle.TextArea
  ) as ElementType;

  useEffect(() => {
    if (ref.current) {
      ref.current.select();
    }
  }, []);

  return (
    <InputFormStyle.Container
      $type={type}
      className={className}
      onSubmit={onSubmit}
    >
      <Form
        type={inputMode}
        defaultValue={defaultValue}
        maxLength={maxLength}
        name={"data"}
        ref={ref}
      />
      <InputFormStyle.Button>
        <FaCheck size={20} />
      </InputFormStyle.Button>
    </InputFormStyle.Container>
  );
};

export default InputForm;
