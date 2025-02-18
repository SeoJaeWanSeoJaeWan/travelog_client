import CommonInput from "@/components/atoms/input/input.style";
import LinkFormStyle from "./linkForm.style";
import ListButton from "@/components/atoms/listBox";
import { FormEvent, useRef } from "react";
import useCreatePinUrl from "@/hooks/apis/pinUrl/mutation/useCreatePinUrl";

interface LinkFormProps {
  id: number;
  onClose: () => void;
}

const LinkForm = (props: LinkFormProps) => {
  const { id, onClose } = props;
  const createPinUrlMutation = useCreatePinUrl();

  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = titleRef.current!.value;
    const url = urlRef.current!.value;

    createPinUrlMutation({
      pinId: id,
      title,
      url,
    });

    titleRef.current!.value = "";
    urlRef.current!.value = "";
  };

  return (
    <LinkFormStyle.Container>
      <div>
        <LinkFormStyle.Form onSubmit={handleSubmitForm}>
          <CommonInput type="text" placeholder="이름" ref={titleRef} />
          <CommonInput type="text" placeholder="URL" ref={urlRef} />

          <ListButton
            buttons={[
              { text: "취소", onClick: onClose },
              { text: "추가", type: "submit", onClick: () => {} },
            ]}
          />
        </LinkFormStyle.Form>
      </div>
    </LinkFormStyle.Container>
  );
};

export default LinkForm;
