import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Cookies } from 'react-cookie';
import { statusCodes } from './statusCodes';

const cookies = new Cookies();

export interface AxiosRequestConfigExt extends AxiosRequestConfig {
  isRetryRequest: boolean | undefined;
}

export interface RequestOptions {
  isHandleError?: boolean;
  baseUrl?: string;
  isPublic?: boolean;
  isCheckExpired?: boolean;
}

export class Request {
  private readonly axiosClient: AxiosInstance;
  private readonly isPublic?: boolean;
  public static refreshTokenFn: Promise<void> | null;

  constructor(
    {
      baseUrl,
      isPublic = false,
      isCheckExpired = false,
    }: RequestOptions = {
        isHandleError: false,
        isPublic: false,
        isCheckExpired: false,
      },
  ) {
    this.axiosClient = axios.create({
      baseURL: baseUrl ?? import.meta.env?.VITE_API_BASE_URL,
      timeout: 600000,
    });
    this.isPublic = isPublic;

    this.axiosClient.interceptors.request.use((config) => {
      const authToken = localStorage.getItem('authToken') as string;
      const header = config.headers as Record<string, string>;

      if (authToken && !this.isPublic) {
        header['Authorization'] = `Bearer ${authToken}`;
      }
      header['Access-Control-Allow-Origin'] = `*`;

      return config;
    });

    this.axiosClient.interceptors.response.use(
      (response) => {
        if (response?.status === statusCodes.UNAUTHORIZED && isCheckExpired) {
          // throw error;
        }
        return response;
      },
      async (error: AxiosError) => {
        const originRequest = error.config as AxiosRequestConfigExt;

        if (
          error.response?.status === statusCodes.UNAUTHORIZED &&
          isCheckExpired
        ) {
          throw error;
          // window.location.href = '/authorization';
        }
        if (
          error.response?.status !== statusCodes.UNAUTHORIZED ||
          !originRequest
        ) {
          throw error;
        }

        return this.axiosClient(originRequest);
      },
    );
  }

  get<T = never>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .get<T>(url, { ...config, params: data })
      .catch((axiosError: AxiosError) => {
        return Promise.reject(axiosError)
      });
  }

  post<T = never>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .post<T>(url, data, config)
      .catch((axiosError: AxiosError) => {
        return Promise.reject(axiosError)
      });
  }
  put<T = never>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .put<T>(url, data, config)
      .catch((axiosError: AxiosError) => {
        return Promise.reject(axiosError)
      });
  }
  patch<T = never>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .patch<T>(url, data, config)
      .catch((axiosError: AxiosError) => {
        return Promise.reject(axiosError)
      });
  }
  delete<T = never>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .delete<T>(url, config)
      .catch((axiosError: AxiosError) => {
        return Promise.reject(axiosError)
      });
  }
}

export const apiClient = new Request({
  isHandleError: true,
  isCheckExpired: true,
});

export const safeApiClient = new Request({
  isHandleError: true,
  isCheckExpired: true,
});

export const tenanApiClient = new Request({
  isHandleError: true,
  isCheckExpired: false,
});
