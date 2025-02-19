import { PUT } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchPin } from "../../query/usePin";
import { useRefetchDay } from "@/hooks/apis/day/query/useDay";
import { useRefetchLog } from "@/hooks/apis/log/query/useLog";

interface UpdatePin {
  lat: number;
  lng: number;
  title: string;
  description: string;
  picture: string;
  price: number;
  priceTypeId: number;
  pinTypeId: number;
}

const updatePin = ({ pinId, body }: { pinId: number; body: UpdatePin }) => {
  return PUT(`/pin/${pinId}`, body);
};

const useUpdatePin = () => {
  const mutation = useMutation({
    mutationFn: updatePin,
  });

  const refetchPin = useRefetchPin();
  const refetchDay = useRefetchDay();
  const refetchLog = useRefetchLog();

  const submitSuccess = (callback: () => void) => () => {
    refetchPin();
    refetchDay();
    refetchLog();
    callback();
  };

  const handleSubmit = (
    pinId: number,
    body: UpdatePin,
    onSuccess: () => void
  ) => {
    mutation.mutate(
      { pinId, body },
      {
        onSuccess: submitSuccess(onSuccess),
      }
    );
  };

  return handleSubmit;
};

export default useUpdatePin;
