var React = require('react');

var Todo = require('./Todo')

var TodoList = React.createClass({

  todoForms : function () {
    var {todolist} = this.props;
    return  todolist.map(function (todo) {return <Todo key={todo.id} id={todo.id} todo={todo.todo}/>})
  }
  ,
  render: function () {
    var {todolist} = this.props;

    return (
      <div>
          {this.todoForms()}
      </div>
    )
  }
})

module.exports = TodoList;
