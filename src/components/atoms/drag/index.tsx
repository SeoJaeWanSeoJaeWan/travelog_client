import { ReactNode, useEffect } from "react";
import DragStyle from "./drag.style";
import { useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

export interface Value {
  type: string;
  id: number;
  index: number;
  name?: string;
}

interface DragProps {
  type: string;
  value: Value;
  enableDnd?: boolean;
  onChange: (value: number) => void;
  onSubmit: (value: Value) => void;
  children: (value: Value) => ReactNode;
}

const Drag = (props: DragProps) => {
  const { children, enableDnd, value, type, onChange, onSubmit } = props;
  const [isDragging, drag, preview] = useDrag(
    () => ({
      type,
      canDrag: enableDnd,
      item: () => {
        document.body.classList.add("dragging");
        return { value };
      },
      collect: (monitor) => monitor.isDragging(),
      end: ({ value }, monitor) => {
        if (!monitor.didDrop()) {
          onSubmit(value);
          document.body.classList.remove("dragging");
        }
      },
    }),
    [value, onSubmit]
  );

  const [, drop] = useDrop(
    () => ({
      accept: type,
      canDrop: () => false,
      hover: (originValue: { value: Value }) => {
        if (originValue.value.index !== value.index) {
          onChange(value.index);
        }
      },
    }),
    [value, onChange]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <DragStyle.Container $opacity={isDragging ? 0 : 1}>
      <div
        ref={(ref) => {
          drag(ref);
          drop(ref);
        }}
      >
        {children(value)}
      </div>
    </DragStyle.Container>
  );
};

export default Drag;
