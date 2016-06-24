var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  render: function () {
    var {id,todo,completed,createAt,completedAt}=this.props;
    var renderDate = ()=>{


      if(completed){
      var message='Completed at '
      var completedTime = moment.unix(createAt).format('DD MMM hh:mm A')
      return message+completedTime;
    }else {
      var message = 'Create at ';
      var createTime = moment.unix(createAt).format('DD MMM hh:mm A')
      return message+createTime;
    }

    }



    return (
      <div onClick={()=>{this.props.onToggle(id)}}>
          <input type="checkbox" checked={completed} onChange={()=>{}}/>
           {todo}
           <p>{renderDate()}</p>

      </div>

    )
  }
})

module.exports = Todo;
