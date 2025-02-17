import { ReactNode, useEffect } from "react";
import DragStyle from "./drag.style";
import { useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

interface Value {
  id: number;
  dayIndex: number;
}

interface DragProps {
  value: Value;
  enableDnd?: boolean;
  onChange: (value: number) => void;
  onSubmit: (value: Value) => void;
  children: (dayIndex: number) => ReactNode;
}

const Drag = (props: DragProps) => {
  const { children, enableDnd, value, onChange, onSubmit } = props;
  const [isDragging, drag, preview] = useDrag(
    () => ({
      type: "drag",
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
      accept: "drag",
      canDrop: () => false,
      hover: (originValue: { value: Value }) => {
        if (originValue.value.dayIndex !== value.dayIndex) {
          onChange(value.dayIndex);
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
      {/* <DragStyle.DragArea
        $isDragging={isDragging}
        ref={(ref) => {
          dropLeft(ref);
        }}
      /> */}
      <div
        ref={(ref) => {
          drag(drop(ref));
        }}
      >
        {children(value.dayIndex)}
      </div>
      {/* <DragStyle.DragArea
        $isDragging={isDragging}
        ref={(ref) => {
          dropRight(ref);
        }}
      /> */}
    </DragStyle.Container>
  );
};

export default Drag;
