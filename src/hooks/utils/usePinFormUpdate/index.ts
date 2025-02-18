import useUpdatePin from "@/hooks/apis/pin/mutation/useUpdatePin";
import useUploadFile from "@/hooks/apis/upload/mutation/useUploadFile";
import Pin from "@/types/apis/pin";
import { ChangeEvent, FormEvent } from "react";

const usePinFormUpdate = (data: Pin | null) => {
  const convertData = () => ({
    lat: data!.lat,
    lng: data!.lng,
    title: data!.title,
    description: data!.description,
    picture: data!.picture,
    price: data!.price,
    priceTypeId: data!.priceType.id,
    pinTypeId: data!.pinType.id,
  });

  const updateMutation = useUpdatePin();
  const uploadFileMutation = useUploadFile();

  const submitPinPosition = (
    lat: number,
    lng: number,
    onSuccess: () => void
  ) => {
    updateMutation(
      data!.id,
      {
        ...convertData(),
        lat,
        lng,
      },
      onSuccess
    );
  };

  const submitPinForm = (onSuccess: () => void) => (pinTypeId: number) => {
    updateMutation(
      data!.id,
      {
        ...convertData(),
        pinTypeId,
      },
      onSuccess
    );
  };

  const submitInputForm =
    (name: string, onSuccess: () => void) =>
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const value = formData.get("data") as string;

      updateMutation(
        data!.id,
        {
          ...convertData(),
          [name]: value,
        },
        onSuccess
      );
    };

  const submitFileForm =
    (onSuccess: () => void) => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files![0];

      if (file.type.indexOf("image") === -1) {
        e.target.value = "";
        return alert("이미지 파일만 업로드 가능합니다.");
      }

      const formData = new FormData();
      formData.append("file", file);

      uploadFileMutation(formData, (fileName) => {
        updateMutation(
          data!.id,
          {
            ...convertData(),
            picture: fileName,
          },
          onSuccess
        );
      });
    };

  return { submitPinForm, submitPinPosition, submitInputForm, submitFileForm };
};

export default usePinFormUpdate;
