import { Suspense } from 'react';

import './App.css';
import { AxiosGetCompoennt } from './components/pages/AxiosTestComponent';
import { AxiosErrorHandlingComponent } from './utilities/AxiosClientComponent';
import { LoadingComponent } from './utilities/LoadingComponent';
import { ReactErrorBoundaryComponent } from './utilities/ReactErrorBoundaryComponent';

function App() {
  return (
    <>
      <ReactErrorBoundaryComponent>
        <AxiosErrorHandlingComponent>
          <Suspense fallback={<LoadingComponent />}>
            <main className="flex h-full w-full flex-col items-center justify-center">
              <AxiosGetCompoennt />
            </main>
          </Suspense>
        </AxiosErrorHandlingComponent>
      </ReactErrorBoundaryComponent>
    </>
  );
}

export default App;
