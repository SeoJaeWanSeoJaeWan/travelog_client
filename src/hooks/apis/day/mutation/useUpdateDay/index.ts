import { PATCH } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLog } from "../../../log/query/useLog";

interface UpdateDay {
  index: number;
}

const updateDay = ({ dayId, body }: { dayId: number; body: UpdateDay }) => {
  return PATCH(`/day/${dayId}`, body);
};

const useUpdateDay = () => {
  const mutation = useMutation({
    mutationFn: updateDay,
  });
  const refetchLog = useRefetchLog();

  const submitSuccess = () => {
    refetchLog();
  };

  const handleSubmit = (dayId: number, body: UpdateDay) => {
    mutation.mutate(
      { dayId, body },
      {
        onSuccess: submitSuccess,
      }
    );
  };

  return handleSubmit;
};

export default useUpdateDay;
