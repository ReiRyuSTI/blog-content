import { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import axios, { AxiosError, AxiosResponse } from 'axios';

export const axiosClient = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:4242/dummy/',
});

type Props = {
  children: React.ReactNode;
};

export const AxiosErrorHandlingComponent = (props: Props) => {
  const { children } = props;
  const errorHandler = useErrorHandler();

  useEffect(() => {
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        errorHandler(error);
        return Promise.reject(error);
      }
    );

    // クリーンアップ
    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
    };
  }, [errorHandler]);

  return <>{children}</>;
};
