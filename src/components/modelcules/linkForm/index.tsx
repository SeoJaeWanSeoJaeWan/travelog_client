import CommonInput from "@/components/atoms/input/input.style";
import LinkFormStyle from "./linkForm.style";
import ListButton from "@/components/atoms/listBox";

interface LinkFormProps {
  onClose: () => void;
}

const LinkForm = (props: LinkFormProps) => {
  const { onClose } = props;

  return (
    <LinkFormStyle.Container>
      <LinkFormStyle.Form>
        <CommonInput type="text" placeholder="이름" />
        <CommonInput type="text" placeholder="URL" />

        <ListButton
          buttons={[
            { text: "취소", onClick: onClose },
            { text: "추가", onClick: () => {} },
          ]}
        />
      </LinkFormStyle.Form>
    </LinkFormStyle.Container>
  );
};

export default LinkForm;
