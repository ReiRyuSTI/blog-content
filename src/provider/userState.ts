import useSWR from 'swr';

export const useUserState = () => {
  const { data: userData, mutate: setUserData } = useSWR<boolean>('test', null, {
    fallbackData: false,
  });
  return { userData, setUserData };
};
