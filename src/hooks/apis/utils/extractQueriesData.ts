import { AxiosResponse } from "axios";

interface ExtractQueriesData<T> {
  data: AxiosResponse<T, any>[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}

const extractQueriesData = <T>(query: ExtractQueriesData<T>) => {
  if (!query.isSuccess) {
    return {
      ...query,
      data: [] as T,
    };
  }

  return {
    ...query,
    data: query.data!.map(({ data }) => data) as T,
  };
};

export default extractQueriesData;
