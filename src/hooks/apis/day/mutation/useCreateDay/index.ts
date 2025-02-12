import { POST } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLog } from "../../../log/query/useLog";

interface CreateDay {
  index: number;
  logId: number;
}

const createDay = (body: CreateDay) => {
  return POST("/day", body);
};

const useCreateDay = () => {
  const mutation = useMutation({
    mutationFn: createDay,
  });
  const refetchLog = useRefetchLog();

  const submitSuccess = () => {
    refetchLog();
  };

  const handleSubmit = (body: CreateDay) => {
    mutation.mutate(body, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useCreateDay;
