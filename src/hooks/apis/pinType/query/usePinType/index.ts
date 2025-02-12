import { GET } from "@/apis";
import extractQueryData from "@/hooks/apis/utils/extractQueryData";
import PinType from "@/types/apis/pinType";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const pinType = () => {
  return GET<PinType[]>("/pinType");
};

const PIN_TYPE_KEY = ["pinType"];

const usePinType = () => {
  const query = useQuery({
    queryKey: PIN_TYPE_KEY,
    queryFn: pinType,
  });

  return extractQueryData<PinType[]>(query);
};

export const useRefetchPinType = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: PIN_TYPE_KEY });
  };

  return refetching;
};

export default usePinType;
