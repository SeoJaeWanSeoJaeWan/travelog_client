import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";
import Drag from "@/components/atoms/drag";
import { useGetLog, useRemoveLog } from "@/hooks/apis/log/query/useLog";
import useDeleteLog from "@/hooks/apis/log/mutation/useDeleteLog";
import useLogKeys from "@/hooks/utils/useLogKeys";
import useCreateDay from "@/hooks/apis/day/mutation/useCreateDay";
import useUpdateDay from "@/hooks/apis/day/mutation/useUpdateDay";
import { useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import DragPreview from "@/components/atoms/dragPreview";
import useDay from "@/hooks/apis/day/query/useDay";

const DayList = () => {
  const data = useGetLog();
  const removeLog = useRemoveLog();
  const deleteLog = useDeleteLog();
  const createDay = useCreateDay();
  const updateDay = useUpdateDay();
  const { removeLogKey } = useLogKeys();

  const [selectDay, setSelectDay] = useState<number | null>(null);
  const queryRefetch = useDay(selectDay);

  const changeIndex = useRef(-1);

  if (!data) return null;

  const handleSelectDay = (id: number) => {
    setSelectDay(id);

    if (selectDay) queryRefetch();
  };

  const handleDeleteLog = () => {
    deleteLog(data.id, ({ key }) => {
      removeLogKey(key);
    });
  };

  const handleCreateDay = () => {
    createDay({ logId: data.id, index: data.days.length + 1 });
  };

  const handleChangeDay = (index: number) => {
    changeIndex.current = index;
  };

  const handleUpdateDay = ({ id, index }: { id: number; index: number }) => {
    const updateIndex = changeIndex.current;

    if (updateIndex !== index && updateIndex !== -1) {
      updateDay(id, { index: updateIndex });
    }
  };

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <ListLayout
        title={data.title}
        price={data.logPriceSummary}
        onDelete={handleDeleteLog}
        onAnimationEnd={() => removeLog(data.id)}
      >
        {data.days.map(({ id, index }) => (
          <Drag
            key={id}
            value={{ id, index }}
            enableDnd
            onChange={handleChangeDay}
            onSubmit={handleUpdateDay}
          >
            {(value) => (
              <DayListStyle.Day onClick={() => handleSelectDay(value.id)}>
                {value.index}
              </DayListStyle.Day>
            )}
          </Drag>
        ))}

        <div>
          <DayListStyle.Day $isCreateButton onClick={handleCreateDay}>
            <FaPlus />
          </DayListStyle.Day>
        </div>
      </ListLayout>

      <DragPreview>
        {(value) => <DayListStyle.Day>{value.Index}</DayListStyle.Day>}
      </DragPreview>
    </DndProvider>
  );
};

export default DayList;
