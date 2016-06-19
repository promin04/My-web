var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Main = require('../../public/scripts/components/Main')

describe('Main',()=>{
  it('Should be Exist',()=>{
    expect(Main).toExist();
  })
})
