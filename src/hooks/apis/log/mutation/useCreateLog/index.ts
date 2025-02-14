import { POST } from "@/apis";
import { useMutation } from "@tanstack/react-query";

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

  const handleSubmit = (
    body: CreateLog,
    onSuccess: (data: { key: string }) => void
  ) => {
    mutation.mutate(body, {
      onSuccess,
    });
  };

  return handleSubmit;
};

export default useCreateLog;
