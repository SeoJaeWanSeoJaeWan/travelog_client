import { GET } from "@/apis";
import { Logs } from "@/types/apis/log";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const logs = () => {
  return GET<Logs[]>("/logs");
};

export const LOGS_KEY = "logs";

const useLogs = () => {
  const query = useQuery({
    queryKey: [LOGS_KEY],
    queryFn: logs,
  });

  return query;
};

export const useRefetchLogs = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [LOGS_KEY] });
  };

  return refetching;
};

export default useLogs;
