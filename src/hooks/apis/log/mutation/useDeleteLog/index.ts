import { DELETE } from "@/apis";
import { useMutation } from "@tanstack/react-query";

const deleteLog = (logId: number) => {
  return DELETE(`/logs/${logId}`);
};

const useDeleteLog = () => {
  const mutation = useMutation({
    mutationFn: deleteLog,
  });

  const handleSubmit = (
    logId: number,
    onSuccess: (data: { key: string }) => void
  ) => {
    mutation.mutate(logId, {
      onSuccess,
    });
  };

  return handleSubmit;
};

export default useDeleteLog;
