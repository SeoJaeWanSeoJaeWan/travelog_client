import { POST } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchDay } from "@/hooks/apis/day/query/useDay";

interface CreatePin {
  lat: number;
  lng: number;
  pinTypeId: number;
  dayId: number;
  index: number;
}

const createPin = (body: CreatePin) => {
  return POST("/pin", body);
};

const useCreatePin = () => {
  const mutation = useMutation({
    mutationFn: createPin,
  });
  const refetchDay = useRefetchDay();

  const submitSuccess = () => {
    refetchDay();
  };

  const handleSubmit = (body: CreatePin) => {
    mutation.mutate(body, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useCreatePin;
