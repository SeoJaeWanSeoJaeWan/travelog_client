import { GET } from "@/apis";
import { PrintLog } from "@/types/apis/log";
import { useQuery } from "@tanstack/react-query";
const PRINT_LOG_KEY = "print_log";

const log = (logId: number) => {
  return GET<PrintLog>(`/logs/print/${logId}`);
};

const usePrintLog = (id: number | null) => {
  console.log(id);
  const query = useQuery({
    queryKey: [PRINT_LOG_KEY, id],
    enabled: !!id,
    queryFn: () => log(id!),
  });

  return query;
};

export default usePrintLog;
