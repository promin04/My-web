var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {SearchForm} from '../../public/scripts/components/SearchForm';

describe('SearchForm',()=>{
  it('Should be Exist',()=>{
    expect(SearchForm).toExist();
  });

  it('Should dispatch searchText on input change',()=>{
    var searchText= 'Dog';
    var action = {
                  type:'searchText',
                  text: searchText
                  }
    var spy = expect.createSpy();
    var searchform = TestUtils.renderIntoDocument(<SearchForm dispatch={spy}/>)
      searchform.refs.searchInput.value = searchText;

      TestUtils.Simulate.change(searchform.refs.searchInput);
      expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should dispatch showCompleted on check change',()=>{
    var action = { type:'showCompleted' };
    var spy = expect.createSpy();
    var searchform = TestUtils.renderIntoDocument(<SearchForm dispatch={spy}/>)

      searchform.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(searchform.refs.showCompleted);
      expect(spy).toHaveBeenCalledWith(action);

  });

});
