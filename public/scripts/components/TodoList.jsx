var React = require('react');
var {connect} = require('react-redux');
var todoAPI = require('../../api/todoAPI');
import Todo from './Todo';


export var TodoList = React.createClass({

  render: function () {
   var {todolist,showCompleted,searchText} = this.props;
   var todolistFilter = todoAPI.filterTodolist(todolist,showCompleted,searchText);
    var todoForms =  todolistFilter.map((todo)=>{ return (<Todo key={todo.id} {...todo}/>)})
    var renderTodo = todoForms.length==0 ||todoForms.length==undefined?<h3>Nothing To Do</h3>:todoForms;

    return (
      <div>
        {renderTodo}
      </div>
    )
  }
})

export default connect((state)=>{
                                    return {...state}
                                    })(TodoList);
