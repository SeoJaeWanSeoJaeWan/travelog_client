import { FaCheck } from "react-icons/fa6";
import LoadLogFormStyle from "./loadLogForm.style";
import useCheckKey from "@/hooks/apis/log/mutation/useCheckKey";
import useLogKeys from "@/hooks/utils/useLogKeys";
import { FormEvent, useEffect, useRef } from "react";

const LoadLogForm = () => {
  const checkKeyMutation = useCheckKey();
  const { updateLogKeys } = useLogKeys();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const key = formData.get("key") as string;

    checkKeyMutation({ key }, ({ key }) => {
      updateLogKeys(key);
    });
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.select();
  }, []);

  return (
    <LoadLogFormStyle.Container onSubmit={handleSubmitForm}>
      <LoadLogFormStyle.Input name="key" ref={inputRef} />
      <LoadLogFormStyle.Button>
        <FaCheck />
      </LoadLogFormStyle.Button>
    </LoadLogFormStyle.Container>
  );
};

export default LoadLogForm;
