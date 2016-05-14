import * as React from "react";
import TodoForm from "../containers/TodoForm";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <TodoForm />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
