var React = require('react');

var SearchForm = React.createClass({
  handleSearch: function () {
    var showCompleted= this.refs.showCompleted.checked;
    var searchText= this.refs.searchInput.value;

    this.props.onSearch(showCompleted,searchText);
  }
  ,
  render:function () {
    return (
    <div className="container__header">

    <input type="search" ref="searchInput" placeholder="Search todos" onChange={this.handleSearch}/>
    <input type="checkbox" id="show" ref="showCompleted" onChange={this.handleSearch}/>
    <label htmlFor="show">Show completed</label>

    </div>)

  }
})

module.exports = SearchForm;
