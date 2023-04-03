import { Link } from 'react-router-dom';

import { useUserState } from '@/provider/userState';

export const ValueCheck1 = () => {
  const { userData } = useUserState();
  return (
    <>
      {userData ? 'true' : 'false'}
      <Link to={'/test2'}>check2</Link>
    </>
  );
};

export const ValueCheck2 = () => {
  const { userData, setUserData } = useUserState();
  return (
    <>
      {userData ? 'trueです' : 'falseです'}
      <button onClick={() => setUserData(!userData)}></button>
      <Link to={'/test1'}>check1</Link>
    </>
  );
};
