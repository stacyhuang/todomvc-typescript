import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import TodoList from "../components/TodoList";

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(function(todo) {
        return todo.completed;
      });
    case "SHOW_ACTIVE":
      return todos.filter(function(todo) {
        return !todo.completed;
      });
  }
};

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.displayFilter)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onTodoToggle: (id: number): void => {
      dispatch(actions.toggleTodo(id));
    },

    onTodoDelete: (id: number): void =>  {
      dispatch(actions.deleteTodo(id));
    },

    onTodoUpdate: (id: number, text: string): void => {
      dispatch(actions.updateTodo(id, text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
