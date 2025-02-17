// import useUpdatePin from "@/hooks/apis/pin/mutation/useUpdatePin";
// import useUploadFile from "@/hooks/apis/upload/mutation/useUploadFile";
import { ChangeEvent, FormEvent } from "react";

const usePinFormUpdate = () =>
  // pinId: number
  {
    // const updateMutation = useUpdatePin();
    // const uploadFileMutation = useUploadFile();

    const submitPinForm = (onSuccess: () => void) => (pinTypeId: number) => {
      // updateMutation(pinId, {
      //   pinTypeId,
      // });

      console.log(pinTypeId);
      onSuccess();
    };

    const submitInputForm =
      (name: string, onSuccess: () => void) =>
      (e: FormEvent<HTMLFormElement>) => {
        console.log(e);
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = formData.get("data") as string;

        console.log(data, name);

        // updateMutation(pinId, {
        //   [name]: data,
        // });
        onSuccess();
      };

    const submitFileForm = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files![0];

      if (file.type.indexOf("image") === -1) {
        return alert("이미지 파일만 업로드 가능합니다.");
      }

      return file;
    };

    return { submitPinForm, submitInputForm, submitFileForm };
  };

export default usePinFormUpdate;
