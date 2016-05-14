import { connect } from "react-redux";
import * as actions from "../actions";
import Link from "../components/Link";

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.displayFilter
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: (): void => {
      dispatch(actions.setDisplayFilter(ownProps.filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
