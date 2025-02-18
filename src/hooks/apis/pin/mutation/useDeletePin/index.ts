import { DELETE } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchDay } from "@/hooks/apis/day/query/useDay";
import { useRefetchLog } from "@/hooks/apis/log/query/useLog";

const deletePin = (pinid: number) => {
  return DELETE(`/pin/${pinid}`);
};

const useDeletePin = () => {
  const mutation = useMutation({
    mutationFn: deletePin,
  });

  const refetchDay = useRefetchDay();
  const refetchLog = useRefetchLog();

  const submitSuccess = () => {
    refetchDay();
    refetchLog();
  };

  const handleSubmit = (pinid: number) => {
    mutation.mutate(pinid, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useDeletePin;
