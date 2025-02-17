import { PropsWithChildren, useEffect } from "react";
import DragStyle from "./drag.style";
import { useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

interface Value {
  id: number;
  dayIndex: number;
}

interface DragProps extends PropsWithChildren {
  value: Value;
  onChange: (value: number) => void;
  onSubmit: (value: Value) => void;
}

const Drag = (props: DragProps) => {
  const { children, value, onChange, onSubmit } = props;
  const [isDragging, drag, preview] = useDrag(
    () => ({
      type: "drag",
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

  const [, dropLeft] = useDrop(
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

  const [, dropRight] = useDrop(
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
      <DragStyle.DragArea
        $isDragging={isDragging}
        ref={(ref) => {
          dropLeft(ref);
        }}
      />
      <div
        ref={(ref) => {
          drag(ref);
        }}
      >
        {children}
      </div>
      <DragStyle.DragArea
        $isDragging={isDragging}
        ref={(ref) => {
          dropRight(ref);
        }}
      />
    </DragStyle.Container>
  );
};

export default Drag;
