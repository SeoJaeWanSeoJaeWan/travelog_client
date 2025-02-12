import { GET } from "@/apis";
import extractQueryData from "@/hooks/apis/utils/extractQueryData";
import { Logs } from "@/types/apis/log";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const logs = () => {
  return GET<Logs[]>("/logs");
};

export const LOGS_KEY = ["logs"];

const useLogs = () => {
  const query = useQuery({
    queryKey: LOGS_KEY,
    queryFn: logs,
  });

  return extractQueryData<Logs[]>(query);
};

export const useRefetchLogs = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: LOGS_KEY });
  };

  return refetching;
};

export default useLogs;
