import { Component, Fragment } from "react";
import ErrorAlert from "./ErrorAlert";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error,
    });
  };
  render() {
    return (
      <Fragment>
        {this.props.children}
        {this.state.hasError && (
          <ErrorAlert title="Error" message={this.state.errorMessage} />
        )}
      </Fragment>
    );
  }
}

export default ErrorBoundary;
