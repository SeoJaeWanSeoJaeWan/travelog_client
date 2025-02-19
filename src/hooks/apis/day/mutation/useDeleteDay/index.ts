import { DELETE } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useRefetchLog } from "../../../log/query/useLog";

const deleteDay = (dayId: number) => {
  return DELETE(`/day/${dayId}`);
};

const useDeleteDay = () => {
  const mutation = useMutation({
    mutationFn: deleteDay,
  });
  const refetchLog = useRefetchLog();

  const submitSuccess = (callback: () => void) => () => {
    refetchLog();
    callback();
  };

  const handleSubmit = (dayId: number, onSuccess: () => void) => {
    const confirm = window.confirm(
      "여행일을 삭제하시겠습니까? \n삭제된 여행일은 복구할 수 없습니다."
    );

    if (confirm) {
      mutation.mutate(dayId, {
        onSuccess: submitSuccess(onSuccess),
      });
    }
  };

  return handleSubmit;
};

export default useDeleteDay;
