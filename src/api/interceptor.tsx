import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import BASE_API_URL from "../utils/env.contants.utils";

export interface SuccessResponseInterface<T = any> {
  status: number;
  statusText: string;
  data: T;
}

export type ResponseInterface = [
  SuccessResponseInterface | undefined,
  string | undefined
];

const fetchData = axios.create({
  baseURL: `${BASE_API_URL}`,
});

fetchData.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error.request);
    return Promise.reject(error);
  }
);

fetchData.interceptors.response.use(
  async (
    response: AxiosResponse<SuccessResponseInterface, any>
  ): Promise<SuccessResponseInterface> => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const _get = async (url: string) => {
  const get = await fetchData.get(url);
  return get;
};

const _post = async (url: string, data: any) => {
  const post = await fetchData.post(url, data);
  return post;
};

const _patch = async (url: string, data: any) => {
  const patch = await fetchData.patch(url, data);
  return patch;
};

const _delete = async (url: string) => {
  const deleteResponse = await fetchData.delete(url);
  console.log(deleteResponse);
  return deleteResponse;
};

export { _get, _post, _patch, _delete };
