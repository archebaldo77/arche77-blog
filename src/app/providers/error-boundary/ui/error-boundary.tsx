import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react';

import { ErrorIndicator } from '@/shared/ui';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`ErrorBoundary log: ${error}, ${errorInfo}`);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback='Loading translations...'>
          <ErrorIndicator />
        </Suspense>
      );
    }

    return children;
  }
}
