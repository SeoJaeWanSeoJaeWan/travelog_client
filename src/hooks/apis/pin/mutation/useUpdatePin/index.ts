import { PUT } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchPin } from "../../query/usePin";

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

  const submitSuccess = () => {
    refetchPin();
  };

  const handleSubmit = (pinId: number, body: UpdatePin) => {
    mutation.mutate(
      { pinId, body },
      {
        onSuccess: submitSuccess,
      }
    );
  };

  return handleSubmit;
};

export default useUpdatePin;
