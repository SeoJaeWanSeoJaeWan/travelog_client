import { DELETE } from "@/apis";
import { useMutation } from "@tanstack/react-query";

const deleteLog = (logId: number) => {
  return DELETE(`/logs/${logId}`);
};

const useDeleteLog = () => {
  const mutation = useMutation({
    mutationFn: deleteLog,
  });

  const handleSubmit = (
    logId: number,
    onSuccess: (data: { key: string }) => void
  ) => {
    const confirm = window.confirm(
      "여행 일정을 삭제하시겠습니까? \n삭제된 여행 일정은 복구할 수 없습니다."
    );

    if (confirm) {
      mutation.mutate(logId, {
        onSuccess,
      });
    }
  };

  return handleSubmit;
};

export default useDeleteLog;
