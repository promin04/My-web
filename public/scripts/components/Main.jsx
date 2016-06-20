var React = require('react');

var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
var SearchForm = require('./SearchForm');

var MainComponent = React.createClass({
  getInitialState:function () {
    return {
      showCompleted:false,
      searchText: '',
      todolist:[{id:1,todo: 'play computer'},{id:2,todo: 'play game'}]
    }
  },
  handleSendTodo: function (newTodo) {
    var {todolist} = this.state;
    var totalLength = todolist.length;
    var forPush = {id:totalLength+1,todo:newTodo}
    todolist.push(forPush);
    console.log(todolist);
  }
  ,
  handleSearch: function (showCompleted,searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  ,
  render: function () {

    return (
      <div>
        <div className="row">
          <div className="small-centered medium-6 large-4 columns">
            <h2>hiiii</h2>
            <SearchForm onSearch={this.handleSearch}/>
            <TodoList todolist={this.state.todolist}/>
            <AddTodo handleSendTodo={this.handleSendTodo}/>
          </div>
        </div>
      </div>

    )
  }
})

module.exports = MainComponent;
