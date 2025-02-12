import { DELETE } from "@/apis";
import { useRefetchPin } from "@/hooks/apis/pin/query/usePin";
import { useMutation } from "@tanstack/react-query";

const deletePinUrl = (pinUrlId: number) => {
  return DELETE(`/pinUrl/${pinUrlId}`);
};

const useDeletePinUrl = () => {
  const mutation = useMutation({
    mutationFn: deletePinUrl,
  });
  const refetchPin = useRefetchPin();

  const submitSuccess = () => {
    refetchPin();
  };

  const handleSubmit = (pinUrlId: number) => {
    mutation.mutate(pinUrlId, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useDeletePinUrl;
