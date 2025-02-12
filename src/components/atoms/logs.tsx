import useCheckKey from "@/hooks/apis/log/mutation/useCheckKey";
import useCreateLog from "@/hooks/apis/log/mutation/useCreateLog";
import useDeleteLog from "@/hooks/apis/log/mutation/useDeleteLog";
import useLogsByKey from "@/hooks/apis/log/query/useLogsByKey";

const Logs = () => {
  const createLog = useCreateLog();
  const deleteLog = useDeleteLog();
  const checkKey = useCheckKey();

  const query = useLogsByKey(["865B6", "4B467", "039A0"]);

  const handleCreate = () => {
    createLog({ title: "제목" });
  };

  const handleDelete = (logId: number) => {
    deleteLog(logId);
  };

  const handleCheckKey = () => {
    checkKey(
      { key: "865B6" },
      () => {
        console.log("성공");
      },
      () => {
        console.log("실패");
      }
    );
  };

  query.isSuccess && console.log(query.data);

  return (
    <>
      <hr />
      <hr />
      <hr />

      <button onClick={handleCreate}>만들기</button>
      <button onClick={handleCheckKey}>체크</button>

      {query.isSuccess &&
        query.data.map((log) => (
          <div key={log.id}>
            {log.title} || {log.id} ||
            <button onClick={() => handleDelete(log.id)}>삭제</button>
          </div>
        ))}

      <hr />
      <hr />
      <hr />
    </>
  );
};

export default Logs;
