import { GET } from "@/apis";
import Pin from "@/types/apis/pin";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const pin = (pinId: number) => {
  return GET<Pin>(`/pin/${pinId}`);
};

export const PIN_KEY = "pin";

const usePin = (id: number | null) => {
  const query = useQuery({
    queryKey: [PIN_KEY, id],
    enabled: !!id,
    queryFn: () => pin(id!),
  });

  const queryRefetch = () => {
    if (!query.data) {
      query.refetch();
    }
  };

  return queryRefetch;
};

export const useRefetchPin = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [PIN_KEY] });
  };

  return refetching;
};

export const useRemovePin = () => {
  const queryClient = useQueryClient();
  const data = useGetPin();

  const removePin = () => {
    if (data) {
      const id = data.id;
      queryClient.setQueryData([PIN_KEY, id], null);
    }
  };

  return removePin;
};

export const useGetPin = () => {
  const queryClient = useQueryClient();
  const prevKey = useRef<String>("");
  const [data, setData] = useState<Pin | null>(null);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      const queryKey = event.query.queryKey;
      if (queryKey[0] !== PIN_KEY) return;

      const data = queryClient.getQueryData(queryKey);

      if (queryKey[1] && JSON.stringify(queryKey) !== prevKey.current && !data)
        return;

      setData(data as Pin);
      prevKey.current = JSON.stringify(event.query.queryKey);
    });
    return () => unsubscribe();
  }, [queryClient]);

  return data;
};

export default usePin;
