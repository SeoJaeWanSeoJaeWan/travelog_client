import { DELETE } from "@/apis";
import { useRefetchPin } from "../../query/usePin";
import { useMutation } from "@tanstack/react-query";

const deletePin = (pinid: number) => {
  return DELETE(`/pin/${pinid}`);
};

const useDeletePin = () => {
  const mutation = useMutation({
    mutationFn: deletePin,
  });

  const refetchPin = useRefetchPin();

  const submitSuccess = () => {
    refetchPin();
  };

  const handleSubmit = (pinid: number) => {
    mutation.mutate(pinid, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useDeletePin;
