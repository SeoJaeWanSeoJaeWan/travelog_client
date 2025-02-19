import { PATCH } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchPin } from "../../query/usePin";
import { useRefetchDay } from "@/hooks/apis/day/query/useDay";

interface UpdatePinIndex {
  index: number;
}

const updatePinIndex = ({
  pinId,
  body,
}: {
  pinId: number;
  body: UpdatePinIndex;
}) => {
  return PATCH(`/pin/${pinId}`, body);
};

const useUpdatePinIndex = () => {
  const mutation = useMutation({
    mutationFn: updatePinIndex,
  });

  const refetchDay = useRefetchDay();
  const refetchPin = useRefetchPin();

  const submitSuccess = () => {
    refetchPin();
    refetchDay();
  };

  const handleSubmit = (pinId: number, body: UpdatePinIndex) => {
    mutation.mutate(
      { pinId, body },
      {
        onSuccess: submitSuccess,
      }
    );
  };

  return handleSubmit;
};

export default useUpdatePinIndex;
