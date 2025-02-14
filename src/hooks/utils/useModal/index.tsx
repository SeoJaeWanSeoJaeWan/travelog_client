import Modal from "@/components/organisms/modal";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type ModalType = "info" | "form";

export interface ModalState {
  text: string;
  type: ModalType;
  confirm: (value: string) => void;
}

interface ModalContetValue {
  createModal: (modalState: ModalState) => void;
}

const ModalContext = createContext<ModalContetValue | undefined>(undefined);

export const ModalProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const modalRef = useRef<HTMLDivElement>(document.querySelector("#modal")!);
  const [modalState, setModalState] = useState<ModalState | null>(null);

  const createModal = (modalState: ModalState) => {
    setModalState(modalState);

    modalRef.current = document.querySelector("#modal")!;
  };

  const closeModal = () => {
    setModalState(null);
  };

  return (
    <ModalContext.Provider value={{ createModal }}>
      {children}
      {modalState &&
        createPortal(
          <Modal {...modalState} closeModal={closeModal} />,
          modalRef.current
        )}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export default useModal;
