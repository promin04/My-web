var React = require('react');


var Todo = React.createClass({

  render: function () {
    var {id,todo}=this.props;
    return (
      <div>
        {id}. {todo}
      </div>
    )
  }
})

module.exports = Todo;
