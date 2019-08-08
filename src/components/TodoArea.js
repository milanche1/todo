import React from "react";
import TodoCard from "./TodoCard";
import Menu from "./Menu";

const container = {
  display: "block",
  margin: "0 auto",
  padding: "30px 100px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridGap: "10%"
};

class TodoArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputClicked: false,
      todos: [
        {
          id: 1,
          title: "title1",
          body: "fkaskdfsoakds",
          deleted: false
        },
        {
          id: 2,
          title: "title2",
          body: "fkaskdfsoakds",
          deleted: false
        },
        {
          id: 3,
          title: "title3",
          body: "fkaskdfsoakds",
          deleted: false
        },
        {
          id: 4,
          title: "title4",
          body: "fkaskdfsoakds",
          deleted: false
        }
      ]
    };
  }

  deleteTodo = () => {
    const field = "deleted";
    const data = this.state.todos[0];
    data[field] = !data[field];
    this.setState({
      data
    });
  };

  addTodo = () => {
    const data = this.state.todos;
    const nextItem = this.state.todos[data];
    const title = "title 5";
    const body = "flfdsk;lfdskl;fkd;s";
    this.setState({ id: nextItem, title: title, body: body });
  };

  render() {
    console.log(this.state.todos);

    return (
      <div style={container}>
        <div className="todo-area" style={gridStyle}>
          {this.state.todos.map(item => {
            if (item.deleted === false) {
              return (
                <TodoCard
                  body={item.body}
                  title={item.title}
                  deleteItem={this.deleteTodo}
                  key={item.id}
                />
              );
            }
          })}
          <Menu addItem={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default TodoArea;
