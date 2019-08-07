import React from "react";
import TodoCard from "./TodoCard";

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

function deleteAction(id) {
  this.setState({id: id, deleted: true});
}

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

  render() {
    return (
      <div style={container}>
        <div className='todo-area' style={gridStyle}>
          {this.state.todos.map((item) => {
            if(item.deleted === false) {
              return <TodoCard body={item.body} title={item.title} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default TodoArea;