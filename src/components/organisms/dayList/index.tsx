import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";
import Drag from "@/components/atoms/drag";
import { DraggingProvider } from "@/hooks/utils/useDragging";
import { useGetLog, useRemoveLog } from "@/hooks/apis/log/query/useLog";
import useDeleteLog from "@/hooks/apis/log/mutation/useDeleteLog";
import useLogKeys from "@/hooks/utils/useLogKeys";
import useCreateDay from "@/hooks/apis/day/mutation/useCreateDay";
import useUpdateDay from "@/hooks/apis/day/mutation/useUpdateDay";
import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import DragPreview from "@/components/atoms/dragPreview";

const DayList = () => {
  const data = useGetLog();
  const removeLog = useRemoveLog();
  const deleteLog = useDeleteLog();
  const createDay = useCreateDay();
  const updateDay = useUpdateDay();
  const { removeLogKey } = useLogKeys();

  const changeDayIndex = useRef(-1);

  const deleteSuccess = (key: string) => {
    removeLogKey(key);
  };

  if (!data) return null;

  const handleDeleteLog = () => {
    deleteLog(data.id, ({ key }) => {
      deleteSuccess(key);
    });
  };

  const handleChangeDay = (index: number) => {
    changeDayIndex.current = index;
  };

  const handleCreateDay = () => {
    createDay({ logId: data.id, index: data.days.length + 1 });
  };

  const handleUpdateDay = ({
    id,
    dayIndex,
  }: {
    id: number;
    dayIndex: number;
  }) => {
    const updateDayIndex = changeDayIndex.current;
    if (updateDayIndex !== dayIndex) {
      updateDay(id, { index: updateDayIndex });
    }
  };

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <ListLayout
        title={data.title}
        price={data.logPriceSummary || 0}
        onDelete={handleDeleteLog}
        onAnimationEnd={() => removeLog(data.id)}
      >
        {data.days.map(({ id, dayIndex }) => (
          <Drag
            key={id}
            value={{ id, dayIndex }}
            onChange={handleChangeDay}
            onSubmit={handleUpdateDay}
          >
            <DayListStyle.Day>{dayIndex}</DayListStyle.Day>
          </Drag>
        ))}

        <li>
          <DayListStyle.Day $isCreateButton onClick={handleCreateDay}>
            <FaPlus />
          </DayListStyle.Day>
        </li>
      </ListLayout>

      {data.days.map(({ id, dayIndex }) => (
        <DragPreview key={id}>
          <DayListStyle.Day>{dayIndex}</DayListStyle.Day>
        </DragPreview>
      ))}
    </DndProvider>
  );
};

export default DayList;
