import React from "react";
import Menu from "./Menu";
import TodoArea from "./TodoArea";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoArea />
        <Menu />
      </div>
    );
  }
}

export default App;
