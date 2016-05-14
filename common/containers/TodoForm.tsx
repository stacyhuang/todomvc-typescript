import * as React from 'react';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

interface TodoFormProps {
  submitTodo: (todo: string) => void
}

interface TodoFormState {
  text: string;
}

function mapDispatchToProps(dispatch) {
  return {
    submitTodo: (todo: string): void => {
      dispatch(actions.addTodo(todo));
    }
  };
};

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props) {
    super(props);
    this.state = {text: ""}
  }

  handleTodoSubmit(event: __React.FormEvent) {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.submitTodo(this.state.text);
      this.setState({text: ""});
    }
  }

  handleChange(event: __React.FormEvent) {
    let target: any = event.target;
    let text = target.value;
    this.setState({text: text});
  }

  render() {
    return (
      <form className="todoForm" onSubmit={ e => this.handleTodoSubmit(e) }>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          value={this.state.text}
          onChange={ e => this.handleChange(e) }
        />
      </form>
    );
  }
};

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
