import { POST } from "@/apis";
import { useMutation } from "@tanstack/react-query";

interface CheckKey {
  key: string;
}

const checkKey = (body: CheckKey) => {
  return POST("/logs/key", body);
};

const useCheckKey = () => {
  const mutation = useMutation({
    mutationFn: checkKey,
  });

  const handleSubmit = (
    body: CheckKey,
    onSuccess: (data: { key: string }) => void
  ) => {
    mutation.mutate(body, {
      onSuccess,
    });
  };

  return handleSubmit;
};

export default useCheckKey;
