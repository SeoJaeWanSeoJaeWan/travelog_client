import { GET } from "@/apis";
import Pin from "@/types/apis/pin";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const pin = (pinId: number) => {
  return GET<Pin>(`/pin/${pinId}`);
};

export const PIN_KEY = ["pin"];

const usePin = (pinId: number) => {
  const query = useQuery({
    queryKey: [...PIN_KEY, pinId],
    queryFn: () => pin(pinId),
  });

  return query;
};

export const useRefetchPin = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: PIN_KEY });
  };

  return refetching;
};

export default usePin;
