var React = require('react');

var SearchForm = React.createClass({
  handleSearch: function () {
    var showCompleted= this.refs.showCompleted.checked;
    var searchText= this.refs.searchText.value;

    this.props.onSearch(showCompleted,searchText);
  }
  ,
  render:function () {
    return (<div>
    <input type='search' ref='searchInput' placeholder='Search todos' onChange={this.handleSearch}/>
    <input type='checkbox' ref='showCompleted' onChange={this.handleSearch}/>
    Show completed todos
    </div>)

  }
})

module.exports = SearchForm;
