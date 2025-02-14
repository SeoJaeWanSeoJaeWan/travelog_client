import { createContext, PropsWithChildren, useContext, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface DraggingContextValue {
  isDragging: boolean;
  dragging: () => void;
  notDragging: () => void;
}

const DraggingContext = createContext<DraggingContextValue | null>(null);

export const DraggingProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [isDragging, setIsDragging] = useState(false);

  const dragging = () => {
    setIsDragging(true);
  };

  const notDragging = () => {
    setIsDragging(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DraggingContext.Provider
        value={{
          isDragging,
          dragging,
          notDragging,
        }}
      >
        {children}
      </DraggingContext.Provider>
    </DndProvider>
  );
};

const useDragging = () => {
  const context = useContext(DraggingContext);

  if (!context) {
    throw new Error("useDragging must be used within DraggingProvider");
  }

  return context;
};

export default useDragging;
