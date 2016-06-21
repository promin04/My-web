var React = require('react');


var Todo = React.createClass({

  render: function () {
    var {id,todo,completed}=this.props;

    return (
      <div onClick={()=>{this.props.onToggle(id)}}>
          <input type="checkbox" checked={completed} onChange={()=>{}}/>
           {todo}
      </div>

    )
  }
})

module.exports = Todo;
