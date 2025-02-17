import { createContext, PropsWithChildren, useContext, useState } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

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
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
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
