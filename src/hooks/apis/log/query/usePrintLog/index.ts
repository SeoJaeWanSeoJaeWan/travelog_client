import { GET } from "@/apis";
import { PrintLog } from "@/types/apis/log";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const PRINT_LOG_KEY = "print_log";

const log = (logId: number) => {
  return GET<PrintLog>(`/logs/print/${logId}`);
};

const usePrintLog = (id: number | null) => {
  const query = useQuery({
    queryKey: [PRINT_LOG_KEY, id],
    enabled: !!id,
    queryFn: () => log(id!),
  });

  return query;
};

export const useRefetchPrintLog = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: [PRINT_LOG_KEY] });
  };

  return refetching;
};

export default usePrintLog;
