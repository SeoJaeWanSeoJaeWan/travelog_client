import { GET } from "@/apis";
import { Log } from "@/types/apis/log";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const log = (logId: number) => {
  return GET<Log>(`/logs/${logId}`);
};

const LOG_KEY = "log";

const useLog = (selectedLog: { id: number } | null) => {
  const id = selectedLog?.id;

  const query = useQuery({
    queryKey: [LOG_KEY, id],
    enabled: !!id,
    queryFn: () => log(id!),
  });

  useEffect(() => {
    if (selectedLog) query.refetch();
  }, [selectedLog]);

  return query;
};

export const useRefetchLog = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [LOG_KEY] });
  };

  return refetching;
};

export const useRemoveLog = () => {
  const queryClient = useQueryClient();

  const removeLog = (id: number) => {
    queryClient.setQueryData([LOG_KEY, id], null);
  };

  return removeLog;
};

export const useGetLog = () => {
  const queryClient = useQueryClient();
  const prevKey = useRef<String>("");
  const [data, setData] = useState<Log | null>(null);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      const queryKey = event.query.queryKey;
      if (queryKey[0] !== LOG_KEY) return;

      const data = queryClient.getQueryData(queryKey);

      if (queryKey[1] && JSON.stringify(queryKey) !== prevKey.current && !data)
        return;

      setData(data as Log);
      prevKey.current = JSON.stringify(event.query.queryKey);
    });

    return () => {
      unsubscribe();
    };
  }, [queryClient]);

  return data;
};

export default useLog;
