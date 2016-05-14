import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

interface ClearCompletedProps {
  clearCompleted: () => void
}

function mapDispatchToProps(dispatch) {
  return {
    clearCompleted: (): void => {
      dispatch(actions.clearCompleted());
    }
  };
};


class ClearCompleted extends React.Component<ClearCompletedProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-clear-completed" onClick={ this.props.clearCompleted }>Clear completed</button>
    );
  }
};

export default connect(
  null,
  mapDispatchToProps
)(ClearCompleted);
