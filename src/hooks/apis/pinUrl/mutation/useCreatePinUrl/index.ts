import { POST } from "@/apis";
import { useRefetchPin } from "@/hooks/apis/pin/query/usePin";
import { useMutation } from "@tanstack/react-query";

interface CreatePinUrl {
  title: string;
  url: string;
  pinId: number;
}

const createPinUrl = (body: CreatePinUrl) => {
  return POST("/pinUrl", body);
};

const useCreatePinUrl = () => {
  const mutation = useMutation({
    mutationFn: createPinUrl,
  });
  const refetchPin = useRefetchPin();

  const submitSuccess = () => {
    refetchPin();
  };

  const handleSubmit = (body: CreatePinUrl) => {
    mutation.mutate(body, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useCreatePinUrl;
