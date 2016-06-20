var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var  SearchForm = require('../../public/scripts/components/SearchForm');

describe('SearchForm',()=>{
  it('Should be Exist',()=>{
    expect(SearchForm).toExist();
  });

  it('Should call onSearch() when searchbox has changed',()=>{
    var searchText= 'Dog';
    var spy = expect.createSpy();
    var searchform = TestUtils.renderIntoDocument(<SearchForm onSearch={spy}/>)
      searchform.refs.searchInput.value = searchText;

      TestUtils.Simulate.change(searchform.refs.searchInput);
      expect(spy).toHaveBeenCalledWith(false,'Dog');
  });

  it('Should call onSearch() when checkbox has checked',()=>{
    var spy = expect.createSpy();
    var searchform = TestUtils.renderIntoDocument(<SearchForm onSearch={spy}/>)

      searchform.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(searchform.refs.showCompleted);
      expect(spy).toHaveBeenCalledWith(true,'');

  });

});
