import { ElementType, FormEvent } from "react";
import InputFormStyle from "./inputForm.style";
import { FaCheck } from "react-icons/fa6";

interface InputFormProps {
  type: "input" | "textarea";
  className: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const InputForm = (props: InputFormProps) => {
  const { type, className, onSubmit, ...rest } = props;

  const Form = (
    type === "input" ? InputFormStyle.Input : InputFormStyle.TextArea
  ) as ElementType;

  return (
    <InputFormStyle.Container
      $type={type}
      className={className}
      onSubmit={onSubmit}
    >
      <Form {...rest} name={"data"} />
      <InputFormStyle.Button>
        <FaCheck size={20} />
      </InputFormStyle.Button>
    </InputFormStyle.Container>
  );
};

export default InputForm;
