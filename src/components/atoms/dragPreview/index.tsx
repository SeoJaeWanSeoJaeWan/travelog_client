import { useDragLayer, XYCoord } from "react-dnd";
import { CSSProperties, PropsWithChildren, ReactNode } from "react";
import Drag from "../drag";

const getStyle = (currentOffset: XYCoord): CSSProperties => {
  const { x, y } = currentOffset;

  return {
    position: "fixed",
    top: `${y}px`,
    left: `${x}px`,

    width: "30px",
    height: "30px",

    zIndex: 20,
    pointerEvents: "none",
  };
};

interface DragPreviewProps {
  children: (dayIndex: number) => ReactNode;
}

const DragPreview = (props: DragPreviewProps) => {
  const { children } = props;
  const { isDragging, currentOffset, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !currentOffset || !item) {
    return null;
  }

  return (
    <div style={getStyle(currentOffset)}>
      <Drag {...item}>{children}</Drag>
    </div>
  );
};

export default DragPreview;
