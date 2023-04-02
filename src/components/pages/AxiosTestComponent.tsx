import { axiosClient } from '@/utilities/AxiosClientComponent';
const flag = { dataFetch: false };

export const AxiosGetCompoennt = () => {
  const data = dataFetch();
  return <>{data}</>;
};
const dataFetch = () => {
  if (!flag.dataFetch) throw axiosClient.get('400').then(() => (flag.dataFetch = true));
  return 'data get';
};
