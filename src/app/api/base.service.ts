import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: /* process.env.REACT_APP_BASE_URL */'https://dummyjson.com',
});

interface Service {
  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}

class ApiService implements Service {
  instance: AxiosInstance;
  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public get<T = any, R = AxiosResponse<T>, D = any>(
    ...args: Parameters<typeof instance.get<T, R, D>>
  ): Promise<R> {
    return this.instance.get(...args);
  }
  public post<T = any, R = AxiosResponse<T>, D = any>(
    ...args: Parameters<typeof instance.post<T, R, D>>
  ): Promise<R> {
    return this.instance.post(...args);
  }
  public delete<T = any, R = AxiosResponse<T>, D = any>(
    ...args: Parameters<typeof instance.delete<T, R, D>>
  ): Promise<R> {
    return this.instance.delete(...args);
  }

  public put<T = any, R = AxiosResponse<T>, D = any>(
    ...args: Parameters<typeof instance.put<T, R, D>>
  ): Promise<R> {
    return this.instance.put(...args);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiService(instance)
