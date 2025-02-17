import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";
import Drag from "@/components/atoms/drag";
import { DraggingProvider } from "@/hooks/utils/useDragging";
import { useGetLog, useRemoveLog } from "@/hooks/apis/log/query/useLog";
import useDeleteLog from "@/hooks/apis/log/mutation/useDeleteLog";
import useLogKeys from "@/hooks/utils/useLogKeys";

const DayList = () => {
  const data = useGetLog();
  const removeLog = useRemoveLog();
  const deleteLog = useDeleteLog();
  const { removeLogKey } = useLogKeys();

  const deleteSuccess = (key: string) => {
    removeLogKey(key);
  };

  if (!data) return null;

  const handleDeleteLog = () => {
    deleteLog(data.id, ({ key }) => {
      deleteSuccess(key);
    });
  };

  return (
    <ListLayout
      title={data.title}
      price={data.logPriceSummary || 0}
      onDelete={handleDeleteLog}
      onAnimationEnd={() => removeLog(data.id)}
    >
      <DraggingProvider>
        {data.days.map(({ id, dayIndex }) => (
          <li key={id}>
            <Drag
              value={dayIndex}
              onChange={(value) => {
                console.log(value);
              }}
              onSubmit={() => {}}
            >
              <DayListStyle.Day>{dayIndex}</DayListStyle.Day>
            </Drag>
          </li>
        ))}
      </DraggingProvider>

      <li>
        <DayListStyle.Day $isCreateButton>
          <FaPlus />
        </DayListStyle.Day>
      </li>
    </ListLayout>
  );
};

export default DayList;
