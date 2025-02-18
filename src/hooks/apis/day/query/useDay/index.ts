import { GET } from "@/apis";
import { Days } from "@/types/apis/day";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const DAY_KEY = "day";
const day = (dayId: number) => {
  return GET<Days>(`/day/${dayId}`);
};

const useDay = (id: number | null) => {
  const query = useQuery({
    queryKey: [DAY_KEY, id],
    enabled: !!id,
    queryFn: () => day(id!),
  });

  const queryRefetch = () => {
    if (!query.data) {
      query.refetch();
    }
  };

  return queryRefetch;
};

export const useRefetchDay = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [DAY_KEY] });
  };

  return refetching;
};

export const useRemoveDay = () => {
  const queryClient = useQueryClient();
  const data = useGetDay();

  const removeDay = () => {
    if (data) {
      const id = data.id;
      queryClient.setQueryData([DAY_KEY, id], null);
    }
  };

  return removeDay;
};

export const useGetDay = () => {
  const queryClient = useQueryClient();
  const prevKey = useRef<String>("");
  const [data, setData] = useState<Days | null>(null);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      const queryKey = event.query.queryKey;
      if (queryKey[0] !== DAY_KEY) return;

      const data = queryClient.getQueryData(queryKey);

      if (queryKey[1] && JSON.stringify(queryKey) !== prevKey.current && !data)
        return;

      setData(data as Days);
      prevKey.current = JSON.stringify(event.query.queryKey);
    });

    return () => {
      unsubscribe();
    };
  }, [queryClient]);

  return data;
};

export default useDay;
