var React = require('react');
var moment = require('moment');

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import SearchForm from './SearchForm';


var MainComponent = React.createClass({
  render: function () {

    return (
      <div>
        <div className="row">
          <div className="small-centered medium-6 large-5 columns">
            <div className="container">
            <h2 className="page-title">Todo App</h2>
            <SearchForm/>
            <TodoList/>
            <AddTodo/>
            </div>
          </div>
        </div>
      </div>

    )
  }
})

module.exports = MainComponent;
