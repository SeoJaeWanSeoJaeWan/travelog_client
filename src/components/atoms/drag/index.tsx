import { PropsWithChildren, useEffect, useRef } from "react";
import DragStyle from "./drag.style";
import useDragging from "@/hooks/utils/useDragging";
import { useDrag, useDrop } from "react-dnd";

interface DragProps extends PropsWithChildren {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const Drag = (props: DragProps) => {
  const { children, value, onChange, onSubmit } = props;

  const { isDragging, dragging, notDragging } = useDragging();
  const [{ isDragging: isDrag }, drag, preview] = useDrag(
    () => ({
      type: "drag",
      item: { value },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (_, monitor) => {
        if (!monitor.didDrop()) {
          onSubmit();
        }
      },
    }),
    [value, onChange]
  );

  const [, dropLeft] = useDrop(
    () => ({
      accept: "drag",
      canDrop: () => false,
      hover: (originValue: { value: string }) => {
        if (originValue.value !== value) {
          onChange(value);
        }
      },
    }),
    [value, onChange]
  );

  const [, dropRight] = useDrop(
    () => ({
      accept: "drag",
      canDrop: () => false,
      hover: (originValue: { value: string }) => {
        if (originValue.value !== value) {
          onChange(value);
        }
      },
    }),
    [value, onChange]
  );

  useEffect(() => {
    if (isDrag) {
      dragging();
    } else {
      notDragging();
    }
  }, [isDrag]);

  return (
    <DragStyle.Container
      ref={(ref) => {
        preview(ref);
      }}
    >
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
