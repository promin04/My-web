var React = require('react');

var TodoList = require('./TodoList');

var MainComponent = React.createClass({
  getInitialState:function () {
    return {
      todolist:[{id:1,todo: 'play computer'},{id:2,todo: 'play game'}]
    }
  },
  render: function () {

    return (
      <div>
        <div className="row">
          <div className="small-centered medium-6 large-4 columns">
            <h2>hiiii</h2>
            <TodoList todolist={this.state.todolist}/>
          </div>
        </div>
      </div>

    )
  }
})

module.exports = MainComponent;
