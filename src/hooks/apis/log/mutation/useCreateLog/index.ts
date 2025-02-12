import { POST } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLogs } from "../../query/useLogs";

interface CreateLog {
  title: string;
}

const createLog = (body: CreateLog) => {
  return POST("/logs", body);
};

const useCreateLog = () => {
  const mutation = useMutation({
    mutationFn: createLog,
  });
  const refetchLogs = useRefetchLogs();

  const submitSuccess = () => {
    refetchLogs();
  };

  const handleSubmit = (body: CreateLog) => {
    mutation.mutate(body, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useCreateLog;
