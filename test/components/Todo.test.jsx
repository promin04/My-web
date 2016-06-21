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

  it('Should call onToggle for handleOnClickTodo with id when click',()=>{
    var todoData = {
      id:1,
      todo: 'play computer',
      completed: false
    }
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var el = ReactDOM.findDOMNode(todo);

    TestUtils.Simulate.click($(el)[0]);

    expect(spy).toHaveBeenCalledWith(1);

  });
})
