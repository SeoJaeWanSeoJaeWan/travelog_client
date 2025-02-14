import { ModalState } from "@/hooks/utils/useModal";
import ModalStyle from "./modal.style";
import { useRef } from "react";

interface ModalProps extends ModalState {
  closeModal: () => void;
}

const Modal = (props: ModalProps) => {
  const { text, type, confirm, closeModal } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const isInfo = type === "info";

  const handleSubmit = () => {
    const value = inputRef.current?.value || "";

    confirm(value);
    closeModal();
  };

  return (
    <ModalStyle.Container>
      <ModalStyle.Content>
        <ModalStyle.Text $isInfo={isInfo}>{text}</ModalStyle.Text>
        {!isInfo && <ModalStyle.Input ref={inputRef} />}

        <ModalStyle.ButtonList>
          <ModalStyle.Button onClick={closeModal}>취소</ModalStyle.Button>
          <ModalStyle.Button onClick={handleSubmit}>확인</ModalStyle.Button>
        </ModalStyle.ButtonList>
      </ModalStyle.Content>
      <ModalStyle.Background onClick={closeModal} />
    </ModalStyle.Container>
  );
};

export default Modal;
