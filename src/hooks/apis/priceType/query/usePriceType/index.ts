import { GET } from "@/apis";
import PriceType from "@/types/apis/priceType";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const priceType = () => {
  return GET<PriceType[]>("/priceType");
};

export const PRICE_TYPE_KEY = "priceType";

const usePriceType = () => {
  const query = useQuery({
    queryKey: [PRICE_TYPE_KEY],
    queryFn: priceType,
  });

  return query;
};

export const useRefetchPriceType = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [PRICE_TYPE_KEY] });
  };

  return refetching;
};

export default usePriceType;
