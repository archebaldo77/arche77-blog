// libraries;
import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react';

// widgets;
import { ErrorIndicator } from '@/widgets/error-indicator';
import { PageLoader } from '@/widgets/page-loader';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  isError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { isError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { isError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(`Error: ${error.message}, info: ${info.componentStack}`);
  }

  render(): ReactNode {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return (
        <Suspense fallback={<PageLoader />}>
          <ErrorIndicator />
        </Suspense>
      );
    }

    return children;
  }
}
