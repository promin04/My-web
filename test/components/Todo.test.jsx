var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('../../public/scripts/components/Todo')

describe('Todo',()=>{
  it('Should be Exist',()=>{
    expect(Todo).toExist();
  })
})