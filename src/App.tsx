import './App.css';
import { RouterConfig } from './router/RouterConfig';
import { AxiosErrorHandlingComponent } from './utilities/AxiosClientComponent';
import { ReactErrorBoundaryComponent } from './utilities/ReactErrorBoundaryComponent';
import { SWRConfigComponent } from './utilities/SWRConfigComponent';

function App() {
  return (
    <>
      <ReactErrorBoundaryComponent>
        <AxiosErrorHandlingComponent>
          <SWRConfigComponent>
            <main className="flex h-full w-full flex-col items-center justify-center">
              <RouterConfig />
            </main>
          </SWRConfigComponent>
        </AxiosErrorHandlingComponent>
      </ReactErrorBoundaryComponent>
    </>
  );
}

export default App;
