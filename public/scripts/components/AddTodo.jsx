var React = require('react');
var {connect} = require('react-redux');
var actions = require('../../../app/actions/actions');
export var AddTodo = React.createClass({
  onSendTodo:function (e) {
    e.preventDefault();
    var todo=this.refs.todo.value;
    if(todo.length>0 && todo){
      this.refs.todo.value = '';
      var {dispatch}=this.props;
      dispatch(actions.startAddTodo(todo));
    } else {
      this.refs.todo.focus();
    }
  }
  ,
  render:function () {
    return(
      <div className="container__footer">
          <form onSubmit={this.onSendTodo}>
            <input type="text" ref="todo" placeholder='Enter todo something.'/>
            <button className='button expanded'>Submit</button>
          </form>

      </div>
    )
  }
})

export default connect()(AddTodo);
