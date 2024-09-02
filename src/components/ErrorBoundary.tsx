import React, { ErrorInfo, ReactNode } from 'react';

import { Button } from './Button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  tryAgain = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-4 bg-neutral-4 rounded-lg text-b-m font-medium">
          Something went wrong, please try one more time or contact support.
          <Button onClick={this.tryAgain} className="mt-4">
            Refresh
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
