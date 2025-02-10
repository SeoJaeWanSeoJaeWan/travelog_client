import axios, { AxiosResponse } from "axios";

const customAxios = axios.create({
  baseURL: `${import.meta.env.API_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const GET = async <T>(url: string): Promise<AxiosResponse<T>> => {
  const res = await customAxios.get(url);

  return res;
};

const POST = async <T>(url: string, body?: T, contentType?: string) => {
  const { data } = await customAxios.post(url, body, {
    headers: {
      "Content-Type": contentType || "application/json",
    },
  });

  return data;
};

const PATCH = async <T>(url: string, body?: T) => {
  const { data } = await customAxios.patch(url, body);

  return data;
};

const PUT = async <T>(url: string, body?: T) => {
  const { data } = await customAxios.put(url, body);

  return data;
};

const DELETE = async (url: string) => {
  const { data } = await customAxios.delete(url);

  return data;
};

export { GET, POST, PUT, PATCH, DELETE };
