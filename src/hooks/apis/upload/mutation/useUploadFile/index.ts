import { POST } from "@/apis";
import { useMutation } from "@tanstack/react-query";

const uploadFile = (body: FormData) => {
  return POST("/upload", body, "multipart/form-data");
};

const useUploadFile = () => {
  const uploadFileMutation = useMutation({
    mutationFn: uploadFile,
  });

  const handleSubmit = (
    body: FormData,
    onSuccess: (fileName: string) => void
  ) => {
    uploadFileMutation.mutate(body, {
      onSuccess,
    });
  };

  return handleSubmit;
};

export default useUploadFile;
