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
import useMap from "@/hooks/utils/useMap";
import { useEffect, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import PinSelector from "@/components/modelcules/pinSelector";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import useDnd from "@/hooks/utils/useDnd";
import useUpdatePinIndex from "@/hooks/apis/pin/mutation/useUpdatePinIndex";
import Marker from "@/components/modelcules/marker";
import usePin from "@/hooks/apis/pin/query/usePin";

interface DayDetailProps {
  onOutBoard: () => void;
  onShowBoard: () => void;
}

const DayDetail = (props: DayDetailProps) => {
  const { onOutBoard, onShowBoard } = props;

  const data = useGetDay();
  const removeDay = useRemoveDay();
  const deleteDay = useDeleteDay();
  const createPin = useCreatePin();
  const updatePin = useUpdatePinIndex();

  const [selectPin, setSelectPin] = useState<number | null>(null);

  const queryRefetch = usePin(selectPin);

  const { clickMapState, addRightClick, updateCenter } = useMap();
  const { onUpdate, onChange } = useDnd();

  const [pinTypePosition, setPinTypePosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (!clickMapState) setPinTypePosition(null);
  }, [clickMapState]);

  if (!data) return null;

  const handleDeleteDay = (callback: () => void) => {
    deleteDay(data.id, callback);
  };

  const mapClick = (lat: number, lng: number) => {
    setPinTypePosition({ lat, lng });
  };

  const handleSelectPosition = () => {
    onOutBoard();
    addRightClick(mapClick, onShowBoard);
  };

  const handleCreatePin = (id: number) => {
    createPin({
      dayId: data.id,
      pinTypeId: id,
      lat: pinTypePosition!.lat,
      lng: pinTypePosition!.lng,
      index: data.pins.length + 1,
    });

    setPinTypePosition(null);
  };

  const handleUpdateDay = (id: number, index: number) => {
    updatePin(id, { index });
  };

  const handleSelectPin = (id: number, lat: number, lng: number) => {
    updateCenter(lat, lng);

    setSelectPin(id);

    if (selectPin) queryRefetch();
  };

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <ListLayout
        isActive={false}
        title={`Day ${data.index}`}
        price={data.dayPriceSummary}
        onDelete={handleDeleteDay}
        onAnimationEnd={removeDay}
      >
        <button onClick={handleSelectPosition}>
          <DayDetailStyle.AddPin>
            <FaPlus />
          </DayDetailStyle.AddPin>
        </button>

        {data.pins.map(({ id, lat, lng, index, pinType }) => (
          <Drag
            type={"pin"}
            key={id}
            value={{ id, index, name: pinType, type: "pin" }}
            enableDnd
            onChange={onChange}
            onSubmit={onUpdate(handleUpdateDay)}
          >
            {(value) => (
              <button onClick={() => handleSelectPin(id, lat, lng)}>
                <Pin name={value.name! as PinName} width={"30px"} />
              </button>
            )}
          </Drag>
        ))}
      </ListLayout>

      <DragPreview type={"pin"}>
        {(value) => <Pin name={value.name! as PinName} width={"30px"} />}
      </DragPreview>

      {pinTypePosition && (
        <CustomOverlayMap position={pinTypePosition}>
          <PinSelector onClick={handleCreatePin} />
        </CustomOverlayMap>
      )}

      <Marker pins={data.pins} onClick={handleSelectPin} />
    </DndProvider>
  );
};

export default DayDetail;
