import * as React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onTodoUpdate: (id: number) => void;
  onTodoDelete: (id: number) => void;
  onTodoToggle: (id: number) => void;
}

class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const { onTodoUpdate, onTodoDelete, onTodoToggle } = this.props;
    const todoNodes = [];

    this.props.todos.map((todo) => {
      todoNodes.push(
        <TodoItem
          todo={todo}
          key={todo.id}
          onUpdate={onTodoUpdate.bind(null, todo.id)}
          onDelete={onTodoDelete.bind(null, todo.id)}
          onToggle={onTodoToggle.bind(null, todo.id)}
        />
      )
    });

    return (
      <div className="todoList">
        {todoNodes}
      </div>
    );
  }
};

export default TodoList;
