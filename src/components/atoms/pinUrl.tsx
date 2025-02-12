import usePin from "@/hooks/apis/pin/query/usePin";
import useCreatePinUrl from "@/hooks/apis/pinUrl/mutation/useCreatePinUrl";
import useDeletePinUrl from "@/hooks/apis/pinUrl/mutation/useDeletePinUrl";
import useUpdatePinUrl from "@/hooks/apis/pinUrl/mutation/useUpdatePinUrl";

const PinUrl = () => {
  const updatePinUrl = useUpdatePinUrl();
  const createPinUrl = useCreatePinUrl();
  const deletePinUrl = useDeletePinUrl();

  const query = usePin(19);

  const handleCreate = () => {
    createPinUrl({
      title: "title",
      url: "url",
      pinId: 19,
    });
  };

  const handleUpdate = () => {
    updatePinUrl(4, {
      title: "url",
      url: "title",
    });
  };

  const handleDelete = () => {
    deletePinUrl(4);
  };

  return (
    <>
      <hr />
      <hr />
      <hr />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      {query.isSuccess &&
        query.data.pinUrl.map((u) => (
          <div key={u.id}>
            {u.title} || {u.url}
          </div>
        ))}
    </>
  );
};

export default PinUrl;
