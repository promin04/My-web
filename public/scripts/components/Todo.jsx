var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');


import * as actions from '../../../app/actions/actions'

export var Todo = React.createClass({

  render: function () {

    var {id,todo,completed,createAt,completedAt,dispatch}=this.props;
    var status=completed?"todo-completed":"todo";

    var renderDate = ()=>{
      if(completed){
      var message='Completed at '
      var completedTime = moment.unix(createAt).format('DD MMM @ hh:mm A')
      return message+completedTime;
    }else {
      var message = 'Create at ';
      var createTime = moment.unix(createAt).format('DD MMM @ hh:mm A')
      return message+createTime;
    }

    }



    return (
      <div className={status} onClick={()=>{
          dispatch(actions.startOnClickTodo(id,completed))
        }}>
          <input type="checkbox" checked={completed} onChange={()=>{}}/>
          <div>
            <p>{todo}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>
      </div>

    )
  }
})

export default connect()(Todo);
