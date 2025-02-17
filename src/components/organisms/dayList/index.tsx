import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";
import Drag from "@/components/atoms/drag";
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

  if (!data) return null;

  const handleDeleteLog = () => {
    deleteLog(data.id, ({ key }) => {
      removeLogKey(key);
    });
  };

  const handleCreateDay = () => {
    createDay({ logId: data.id, index: data.days.length + 1 });
  };

  const handleChangeDay = (index: number) => {
    changeDayIndex.current = index;
  };

  const handleUpdateDay = ({
    id,
    dayIndex,
  }: {
    id: number;
    dayIndex: number;
  }) => {
    const updateDayIndex = changeDayIndex.current;

    if (updateDayIndex !== dayIndex && updateDayIndex !== -1) {
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
            enableDnd
            onChange={handleChangeDay}
            onSubmit={handleUpdateDay}
          >
            {(dayIndex) => <DayListStyle.Day>{dayIndex}</DayListStyle.Day>}
          </Drag>
        ))}

        <div>
          <DayListStyle.Day $isCreateButton onClick={handleCreateDay}>
            <FaPlus />
          </DayListStyle.Day>
        </div>
      </ListLayout>

      <DragPreview>
        {(dayIndex) => <DayListStyle.Day>{dayIndex}</DayListStyle.Day>}
      </DragPreview>
    </DndProvider>
  );
};

export default DayList;
