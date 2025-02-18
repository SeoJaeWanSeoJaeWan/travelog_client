import ListLayout from "@/components/modelcules/listLayout";
import DayDetailStyle from "./dayDetail.style";
import { FaPlus } from "react-icons/fa6";
import { useGetDay, useRemoveDay } from "@/hooks/apis/day/query/useDay";
import useDeleteDay from "@/hooks/apis/day/mutation/useDeleteDay";
import useCreatePin from "@/hooks/apis/pin/mutation/useCreatePin";
import Drag from "@/components/atoms/drag";
import Pin from "@/components/atoms/pin";
import { PinName } from "@/types/apis/pinType";
import DragPreview from "@/components/atoms/dragPreview";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

const DayDetail = () => {
  const data = useGetDay();
  const removeDay = useRemoveDay();
  const deleteDay = useDeleteDay();
  const createPin = useCreatePin();

  if (!data) return null;

  const handleDeleteDay = () => {
    deleteDay(data.id);
  };

  const handleCreatePin = () => {
    // createPin({ dayId: data.id });
  };

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <ListLayout
        title={`Day ${data.index}`}
        price={data.dayPriceSummary}
        onDelete={handleDeleteDay}
        onAnimationEnd={() => removeDay(data.id)}
      >
        {data.pins.map(({ id, index }) => (
          <Drag
            key={id}
            value={{ id, index }}
            enableDnd
            onChange={(value) => {
              console.log(value);
            }}
            onSubmit={() => {}}
          >
            {(value) => (
              <button onClick={() => {}}>
                <Pin name={value.name! as PinName} width={"30px"} />
              </button>
            )}
          </Drag>
        ))}

        <button>
          <DayDetailStyle.AddPin>
            <FaPlus />
          </DayDetailStyle.AddPin>
        </button>
      </ListLayout>

      <DragPreview>
        {(value) => <Pin name={value.name! as PinName} width={"30px"} />}
      </DragPreview>
    </DndProvider>
  );
};

export default DayDetail;
