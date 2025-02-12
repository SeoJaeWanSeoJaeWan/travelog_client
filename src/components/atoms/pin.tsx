import useCreatePin from "@/hooks/apis/pin/mutation/useCreatePin";
import useDeletePin from "@/hooks/apis/pin/mutation/useDeletePin";
import useUpdatePin from "@/hooks/apis/pin/mutation/useUpdatePin";
import useUpdatePinIndex from "@/hooks/apis/pin/mutation/useUpdatePinIndex";
import usePin from "@/hooks/apis/pin/query/usePin";

const Pin = () => {
  const createPin = useCreatePin();
  const deletePin = useDeletePin();
  const updatePinIndex = useUpdatePinIndex();
  const updatePin = useUpdatePin();

  const query = usePin(19);

  const handleCreate = () => {
    createPin({
      lat: 0,
      lng: 0,
      pinTypeId: 1,
      dayId: 19,
      index: 2,
    });
  };

  const handleDelete = () => {
    deletePin(19);
  };

  const handleUpdateIndex = () => {
    updatePinIndex(19, {
      index: 2,
    });
  };

  const handleUpdate = () => {
    updatePin(19, {
      lat: 19,
      lng: 50,
      title: "",
      description: "",
      pinTypeId: 1,
      priceTypeId: 1,
      price: 10000,
      picture: "",
    });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <button onClick={handleCreate}>만들기</button>
      <button onClick={handleUpdateIndex}>업데이트 인덱스</button>
      <button onClick={handleUpdate}>업데이트</button>
      <button onClick={handleDelete}>삭제</button>
      {query.isSuccess && (
        <div>
          {query.data.id} <br />
          {query.data.index} <br />
          {query.data.lat}
          <br />
          {query.data.lng}
          <br />
          {query.data.description}
          <br />
          {query.data.title}
        </div>
      )}
    </>
  );
};

export default Pin;
