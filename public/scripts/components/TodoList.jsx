var React = require('react');

var Todo = require('./Todo')

var TodoList = React.createClass({


  render: function () {
    var {todolist} = this.props;
    var todoForms =  todolist.map((todo)=>{return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>})
    var renderTodo = todoForms.length==0?'nothingTodo':todoForms;
    return (
      <div>
          {renderTodo}
      </div>
    )
  }
})

module.exports = TodoList;
