var React = require('react');
var {connect} = require('react-redux');

var actions = require('../../../app/actions/actions');

export var SearchForm = React.createClass({

  render:function () {
    var {dispatch,searchText,showCompleted} = this.props;
    return (
    <div className="container__header">

    <input type="search" ref="searchInput" placeholder="Search todos" value={searchText} onChange={()=>{
        var searchTextBox= this.refs.searchInput.value;
        dispatch(actions.searchText(searchTextBox));
    }}/>
    <input type="checkbox" id="show" ref="showCompleted" checked={showCompleted} onChange={()=>{
        dispatch(actions.showCompleted());
    }}/>
    <label htmlFor="show">Show completed</label>

    </div>)

  }
})

export default connect((state)=>{
                                return {
                                        showCompleted:state.showCompleted,
                                        searchText:state.searchText
                                }
})(SearchForm);
