var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var MainComponent = require('../../public/scripts/components/Main')

describe('MainComponent',()=>{
  it('Should be Exist',()=>{
    expect(MainComponent).toExist();
  })

  it('Should add todo handleSendTodo',()=>{
    var main = TestUtils.renderIntoDocument(<MainComponent/>);
    main.setState({todolist:[]});
    main.handleSendTodo('play game');
    expect(main.state.todolist[0].todo).toBe('play game')
  })
})
