import { POST } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLog } from "@/hooks/apis/log/query/useLog";

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
  const refetchLog = useRefetchLog();

  const submitSuccess = () => {
    refetchLog();
  };

  const handleSubmit = (body: CreatePin) => {
    mutation.mutate(body, {
      onSuccess: submitSuccess,
    });
  };

  return handleSubmit;
};

export default useCreatePin;
