import { DELETE } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchDay } from "@/hooks/apis/day/query/useDay";
import { useRefetchLog } from "@/hooks/apis/log/query/useLog";

const deletePin = (pinid: number) => {
  return DELETE(`/pin/${pinid}`);
};

const useDeletePin = () => {
  const mutation = useMutation({
    mutationFn: deletePin,
  });

  const refetchDay = useRefetchDay();
  const refetchLog = useRefetchLog();

  const submitSuccess = (callback: () => void) => () => {
    refetchDay();
    refetchLog();
    callback();
  };

  const handleSubmit = (pinid: number, onSuccess: () => void) => {
    const confirm = window.confirm(
      "핀을 삭제하시겠습니까? \n삭제된 핀은 복구할 수 없습니다."
    );

    if (confirm) {
      mutation.mutate(pinid, {
        onSuccess: submitSuccess(onSuccess),
      });
    }
  };

  return handleSubmit;
};

export default useDeletePin;
