import { useDragLayer, XYCoord } from "react-dnd";
import { CSSProperties, ReactNode } from "react";
import Drag, { Value } from "../drag";

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
  children: (value: Value) => ReactNode;
  type: string;
}

const DragPreview = (props: DragPreviewProps) => {
  const { type, children } = props;
  const { isDragging, currentOffset, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const isType = item?.value.type === type;

  if (!isDragging || !currentOffset || !item || !isType) {
    return null;
  }

  return (
    <div style={getStyle(currentOffset)}>
      <Drag {...item} type={type}>
        {children}
      </Drag>
    </div>
  );
};

export default DragPreview;
