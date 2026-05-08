import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary-dark p-6">
          <div className="max-w-md w-full glass p-8 rounded-3xl gold-border text-center">
            <h2 className="text-3xl font-serif text-gold mb-4">Something went wrong</h2>
            <p className="text-white/60 mb-8 font-light italic">
              Our royal systems encountered an unexpected challenge. Please try refreshing the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-red text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all gold-shadow"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
