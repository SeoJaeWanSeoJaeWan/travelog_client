import { useDragLayer, XYCoord } from "react-dnd";
import { CSSProperties, PropsWithChildren } from "react";

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

const DragPreview = (props: PropsWithChildren) => {
  const { children } = props;
  const { isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  return (
    isDragging &&
    currentOffset && <div style={getStyle(currentOffset)}>{children}</div>
  );
};

export default DragPreview;
