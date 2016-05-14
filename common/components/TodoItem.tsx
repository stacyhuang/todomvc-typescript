import * as React from 'react';
import * as classNames from 'classnames';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  key: number;
  onUpdate: (text: string) => void;
  onDelete: () => void;
  onToggle: () => void;
}

interface TodoItemState {
  editing?: boolean;
  text?: string;
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: this.props.todo.text
    };
  }

  handleUpdate(event: __React.FormEvent) {
    event.preventDefault();
    this.stopEditing();
    this.props.onUpdate(this.state.text);
  }

  handleChange(event: __React.FormEvent) {
    let target : any = event.target;
    let text = target.value;
    this.setState({text: text});
  }

  startEditing() {
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  render() {
    const { todo, onToggle, onDelete } = this.props;
    const todoClass = classNames("todo", "row", {"completed": todo.completed});
    const ctnTodoTextClass = classNames("ctn-todo-text", {"editing": this.state.editing});
    return (
      <div className={todoClass}>
        <div className="checkbox col-xs-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
          />
        </div>
        <form className="col-xs-10" onSubmit={ e => this.handleUpdate(e) }>
          <input
            type="text"
            className={ctnTodoTextClass}
            readOnly={!this.state.editing}
            value={this.state.text}
            onDoubleClick={ e => this.startEditing() }
            onBlur={ e => this.stopEditing() }
            onChange={ e => this.handleChange(e)}
          />
        </form>
        <button type="button" className="close col-xs-1" aria-label="Close" onClick={onDelete}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
    );
  }
};

export default TodoItem;
