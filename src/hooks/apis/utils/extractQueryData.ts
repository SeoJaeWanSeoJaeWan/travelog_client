import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const extractQueryData = <T>(query: UseQueryResult<AxiosResponse<T, any>>) => {
  if (!query.isSuccess) {
    return {
      ...query,
      data: null,
    };
  }

  return {
    ...query,
    data: query.data!.data as T,
  };
};

export default extractQueryData;
