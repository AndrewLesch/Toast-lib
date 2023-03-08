import React, { Component } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
}

type State = {
  hasError: boolean;
  error: null | Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error : Error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <>
          Something went wrong.
          {error}
        </>
      );
    }

    return children;
  }
}
