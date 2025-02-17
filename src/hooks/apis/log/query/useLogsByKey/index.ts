import { GET } from "@/apis";
import { Logs } from "@/types/apis/log";
import { useQueries, useQueryClient } from "@tanstack/react-query";

const logsByKey = (key: string) => {
  return GET<Logs>(`/logs?key=${key}`);
};

const LOG_BY_KEY_QUERY_KEY = "logsByKey";

const useLogsByKey = (keys: string[]) => {
  const query = useQueries({
    queries: keys.map((key) => ({
      queryKey: [LOG_BY_KEY_QUERY_KEY, key],
      queryFn: () => logsByKey(key),
      keepPriviousData: true,
    })),
    combine: (queries) => {
      return {
        data: queries.filter((query) => query.data).map((query) => query.data!),
        isSuccess: queries.every((query) => query.isSuccess),
        isLoading: queries.some((query) => query.isLoading),
        isError: queries.some((query) => query.isError),
      };
    },
  });

  return query;
};

export const useRefetchLogsByKey = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [LOG_BY_KEY_QUERY_KEY] });
  };

  return refetching;
};

export default useLogsByKey;
