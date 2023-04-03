import useSWR from 'swr';

import { axiosClient } from '@/utilities/AxiosClientComponent';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const AxiosGetCompoennt = () => {
  const { data, isLoading, isValidating } = useSWR('test', dataFetch);

  if (isLoading || isValidating) return <LoadingComponent />;
  return <>{data}</>;
};
const dataFetch = async () => {
  await axiosClient.get('500');
  return 'data get';
};
