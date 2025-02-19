import Info from "@/components/atoms/info";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface InfoContetValue {
  createInfo: (infoState: string) => void;
}

const InfoContext = createContext<InfoContetValue | undefined>(undefined);

export const InfoProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const infoRef = useRef<HTMLDivElement>(document.querySelector("#info")!);
  const [infoState, setInfoState] = useState<string>("");
  const autoCloseRef = useRef<number | undefined>(undefined);

  const createInfo = (infoState: string) => {
    clearTimeout(autoCloseRef.current);

    setInfoState(infoState);

    autoCloseRef.current = setTimeout(() => {
      setInfoState("");
    }, 4000);
  };

  return (
    <InfoContext.Provider value={{ createInfo }}>
      {children}

      {infoState && createPortal(<Info>{infoState}</Info>, infoRef.current)}
    </InfoContext.Provider>
  );
};

const useInfo = () => {
  const context = useContext(InfoContext);

  if (!context) {
    throw new Error("useInfo must be used within a InfoProvider");
  }

  return context;
};

export default useInfo;
