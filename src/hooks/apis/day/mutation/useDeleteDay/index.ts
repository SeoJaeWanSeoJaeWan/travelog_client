import { DELETE } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLog } from "../../../log/query/useLog";

const deleteDay = (dayId: number) => {
  return DELETE(`/day/${dayId}`);
};

const useDeleteDay = () => {
  const mutation = useMutation({
    mutationFn: deleteDay,
  });
  const refetchLog = useRefetchLog();

  const submitSuccess = () => {
    refetchLog();
  };

  const handleSubmit = (dayId: number) => {
    mutation.mutate(dayId, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useDeleteDay;
