import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AxiosGetCompoennt } from '@/components/pages/AxiosTestComponent';
import { ValueCheck1, ValueCheck2 } from '@/components/pages/SWRValueCheckComponet';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AxiosGetCompoennt />} />
        <Route path="/test1" element={<ValueCheck1 />} />
        <Route path="/test2" element={<ValueCheck2 />} />
      </Routes>
    </BrowserRouter>
  );
};
