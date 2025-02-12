import { PUT } from "@/apis";
import { useRefetchPin } from "@/hooks/apis/pin/query/usePin";
import { useMutation } from "@tanstack/react-query";

interface UpdatePinUrl {
  title: string;
  url: string;
}

const updatePinUrl = ({
  pinUrlId,
  body,
}: {
  pinUrlId: number;
  body: UpdatePinUrl;
}) => {
  return PUT(`/pinUrl/${pinUrlId}`, body);
};

const useUpdatePinUrl = () => {
  const mutation = useMutation({
    mutationFn: updatePinUrl,
  });

  const refetchPin = useRefetchPin();

  const submitSuccess = () => {
    refetchPin();
  };

  const handleSubmit = (pinUrlId: number, body: UpdatePinUrl) => {
    mutation.mutate(
      { pinUrlId, body },
      {
        onSuccess: submitSuccess,
      }
    );
  };

  return handleSubmit;
};

export default useUpdatePinUrl;
