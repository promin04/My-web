var React = require('react');
var {connect} = require('react-redux');

var actions = require('../../../app/actions/actions');

export var SearchForm = React.createClass({

  render:function () {
    var {dispatch,searchText,showCompleted,completedCount} = this.props;
    var showCountCompleted = completedCount>0?(<span className="success badge">{completedCount}</span>):null

    
    return (
    <div className="container__header">

    <input type="search" ref="searchInput" placeholder="Search todos" value={searchText} onChange={()=>{
        var searchTextBox= this.refs.searchInput.value;
        dispatch(actions.searchText(searchTextBox));
    }}/>
    <input type="checkbox" id="show" ref="showCompleted" checked={showCompleted} onChange={()=>{
        dispatch(actions.showCompleted());
    }}/>
    <label htmlFor="show">Show completed {showCountCompleted}</label>

    </div>)

  }
})

export default connect((state)=>{
                                return {
                                        showCompleted:state.showCompleted,
                                        searchText:state.searchText,
                                        completedCount:state.completedCount
                                }
})(SearchForm);
