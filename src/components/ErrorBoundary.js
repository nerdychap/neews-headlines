import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {

        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div>
                <h1 className="text-center">Something went wrong. Please reload page.</h1>
            </div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;