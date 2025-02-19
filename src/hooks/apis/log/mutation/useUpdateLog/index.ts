import { PATCH } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLog } from "../../query/useLog";
import { useRefetchLogsByKey } from "../../query/useLogsByKey";

interface UpdateLogBody {
  title: string;
}

const updateLog = ({ logId, body }: { logId: number; body: UpdateLogBody }) => {
  return PATCH(`/logs/${logId}`, body);
};

const useUpdateLog = () => {
  const updateMutation = useMutation({
    mutationFn: updateLog,
  });

  const refetchLog = useRefetchLog();
  const refetchLogsKey = useRefetchLogsByKey();

  const submitSuccess = () => {
    refetchLog();
    refetchLogsKey();
  };

  const handleSubmit = (logId: number, body: UpdateLogBody) => {
    updateMutation.mutate(
      { logId, body },
      {
        onSuccess: submitSuccess,
      }
    );
  };

  return handleSubmit;
};

export default useUpdateLog;
