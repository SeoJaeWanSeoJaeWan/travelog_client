import { GET } from "@/apis";
import PinType from "@/types/apis/pinType";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const pinType = () => {
  const data = GET<PinType[]>("/pinType");

  return data;
};

const PIN_TYPE_KEY = "pinType";

const usePinType = () => {
  const query = useQuery({
    queryKey: [PIN_TYPE_KEY],
    queryFn: pinType,
  });

  return query;
};

export const useRefetchPinType = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [PIN_TYPE_KEY] });
  };

  return refetching;
};

export default usePinType;
