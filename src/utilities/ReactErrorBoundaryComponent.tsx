import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { AxiosError } from 'axios';

type Props = {
  children: React.ReactNode;
};

export const ReactErrorBoundaryComponent = (props: Props) => {
  const { children } = props;
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  // axios error
  if (error instanceof AxiosError)
    return (
      <>
        <pre>
          react-error-boundary axios error {error.message} | {error.code}
        </pre>
        <button type="button" onClick={resetErrorBoundary}>
          reset button
        </button>
      </>
    );

  //   normal error
  return (
    <>
      <pre>react-error-boundary {error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        reset button
      </button>
    </>
  );
};

// interface FallbackPropsAxiosError extends FallbackProps {
//   error: AxiosError;
// }
