import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";
import Drag from "@/components/atoms/drag";
import { useGetLog, useRemoveLog } from "@/hooks/apis/log/query/useLog";
import useDeleteLog from "@/hooks/apis/log/mutation/useDeleteLog";
import useLogKeys from "@/hooks/utils/useLogKeys";
import useCreateDay from "@/hooks/apis/day/mutation/useCreateDay";
import useUpdateDay from "@/hooks/apis/day/mutation/useUpdateDay";
import { FormEvent, useState } from "react";
import DragPreview from "@/components/atoms/dragPreview";
import useDay from "@/hooks/apis/day/query/useDay";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import useDnd from "@/hooks/utils/useDnd";
import { useRemovePin } from "@/hooks/apis/pin/query/usePin";
import useUpdateLog from "@/hooks/apis/log/mutation/useUpdateLog";

const DayList = () => {
  const data = useGetLog();
  const removeLog = useRemoveLog();
  const deleteLog = useDeleteLog();
  const createDay = useCreateDay();
  const updateDay = useUpdateDay();
  const removePin = useRemovePin();
  const updateLog = useUpdateLog();
  const { removeLogKey } = useLogKeys();

  const [selectDay, setSelectDay] = useState<number | null>(null);
  const queryRefetch = useDay(selectDay);

  const { onUpdate, onChange } = useDnd();

  if (!data) return null;

  const handleSelectDay = (id: number) => {
    setSelectDay(id);
    removePin();

    if (selectDay) queryRefetch();
  };

  const handleDeleteLog = (callback: () => void) => {
    deleteLog(data.id, ({ key }) => {
      removeLogKey(key);
      callback();
    });
  };

  const handleCreateDay = () => {
    createDay({ logId: data.id, index: data.days.length + 1 });
  };

  const handleUpdateDay = (id: number, index: number) => {
    updateDay(id, { index });
  };

  const handleUpdateLog = (e: FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("data") as string;

    updateLog(data.id, { title });
  };

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <ListLayout
        isActive={true}
        title={data.title}
        price={data.logPriceSummary}
        onDelete={handleDeleteLog}
        onAnimationEnd={removeLog}
        onSubmit={handleUpdateLog}
      >
        <div>
          <DayListStyle.Day $isCreateButton onClick={handleCreateDay}>
            <FaPlus />
          </DayListStyle.Day>
        </div>
        {data.days.map(({ id, index }) => (
          <Drag
            type={"day"}
            key={id}
            value={{ id, index, type: "day" }}
            enableDnd
            onChange={onChange}
            onSubmit={onUpdate(handleUpdateDay)}
          >
            {(value) => (
              <DayListStyle.Day onClick={() => handleSelectDay(value.id)}>
                {value.index}
              </DayListStyle.Day>
            )}
          </Drag>
        ))}
      </ListLayout>

      <DragPreview type={"day"}>
        {(value) => <DayListStyle.Day>{value.index}</DayListStyle.Day>}
      </DragPreview>
    </DndProvider>
  );
};

export default DayList;
