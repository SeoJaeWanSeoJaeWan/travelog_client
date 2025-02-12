import { DELETE } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLogs } from "../../query/useLogs";

const deleteLog = (logId: number) => {
  return DELETE(`/logs/${logId}`);
};

const useDeleteLog = () => {
  const mutation = useMutation({
    mutationFn: deleteLog,
  });
  const refetchLogs = useRefetchLogs();

  const submitSuccess = () => {
    refetchLogs();
  };

  const handleSubmit = (logId: number) => {
    mutation.mutate(logId, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useDeleteLog;
