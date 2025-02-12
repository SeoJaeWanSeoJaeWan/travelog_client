import { GET } from "@/apis";
import extractQueryData from "@/hooks/apis/utils/extractQueryData";
import { Log } from "@/types/apis/log";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const log = (logId: number) => {
  return GET<Log>(`/logs/${logId}`);
};

const LOG_KEY = ["log"];

const useLog = (logId: number) => {
  const query = useQuery({
    queryKey: [...LOG_KEY, logId],
    queryFn: () => log(logId),
  });

  return extractQueryData<Log>(query);
};

export const useRefetchLog = () => {
  const queryClient = useQueryClient();

  const refetching = () => {
    queryClient.invalidateQueries({ queryKey: LOG_KEY });
  };

  return refetching;
};

export default useLog;
