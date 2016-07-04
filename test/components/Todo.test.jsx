var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import {Todo} from '../../public/scripts/components/Todo'
import * as actions from '../../app/actions/actions';

describe('Todo',()=>{
  it('Should be Exist',()=>{
    expect(Todo).toExist();
  })

  it('Should dispacth when click on todo',()=>{
    var todoData = {
      id:1,
      todo: 'play computer',
      completed: false
    }
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var el = ReactDOM.findDOMNode(todo);

    TestUtils.Simulate.click($(el)[0]);

    expect(spy).toHaveBeenCalledWith(actions.startOnClickTodo(todoData.id,todoData.completed));

  });
})
