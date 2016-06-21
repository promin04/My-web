var React = require('react');

var Todo = require('./Todo')

var TodoList = React.createClass({

  todoForms : function () {
    var {todolist} = this.props;
    return  todolist.map((todo)=>{return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>})
  },
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
