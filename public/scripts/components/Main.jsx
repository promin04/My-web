var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('../../../app/actions/actions');
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import SearchForm from './SearchForm';


export var MainComponent = React.createClass({
  onLogout: function () {
    var {dispatch} = this.props;
    dispatch(actions.Logout())
  },
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#">
            <button className="button" onClick={()=>this.onLogout()}>Log Out</button>
          </a>
        </div>
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

export default connect()(MainComponent);
