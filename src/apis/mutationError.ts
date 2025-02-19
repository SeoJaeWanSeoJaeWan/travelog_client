import { isAxiosError } from "axios";

interface ErrorResponse {
  data: {
    code: string;
    message: string;
  };
}

const mutationError = (error: unknown) => {
  if (isAxiosError(error) && error.response) {
    const response = error.response as ErrorResponse;
    const { code, message } = response.data;

    alert(`[${code}] ${message}\n오류가 반복될 경우 관리자에게 문의해주세요.`);
  }
};

export default mutationError;
