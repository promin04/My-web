var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('../../../app/actions/actions');
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import SearchForm from './SearchForm';
import StopActions from './StopActions';


export var MainComponent = React.createClass({
  onLogout: function () {
    var {dispatch} = this.props;
    dispatch(actions.Logout())
  },
  render: function () {
    var {dispatch,appState} = this.props;
    var renderAddTodo = (appState)=>{
      if(appState!=="setAdd"){
        return <StopActions/>
      } else {
        return <AddTodo/>
      }
    }
    return (
      <div>
        <div className="page-actions">
          <a href="#">
            <button className="button" onClick={()=>this.onLogout()}>Log Out</button>
          </a>
        </div>
        <div className="row full-width">
          <div className="small-centered small-12 medium-9 large-7 columns">
            <div className="container">
            <h2 className="page-title">- Short Note -</h2>
            <SearchForm/>
            <TodoList/>
            {renderAddTodo(appState)}

            </div>
          </div>
        </div>
      </div>

    )
  }
})

export default connect((state)=>{
                                  return {
                                          appState:state.appState
                                  }
})(MainComponent);
