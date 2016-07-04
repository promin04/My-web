var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

import * as actions from '../../app/actions/actions';
import ConnectAddTodo,{AddTodo} from '../../public/scripts/components/AddTodo';

describe('AddTodo',()=>{
  it('Should be exist',()=>{
    expect(AddTodo).toExist();
  })

  it('Should call dispatch addTodo when submit',()=>{
    var spy = expect.createSpy();
    var action = actions.startAddTodo('go to school');
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var el = ReactDOM.findDOMNode(addTodo);

    addTodo.refs.todo.value = 'go to school';
    TestUtils.Simulate.submit($(el).find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  })

  it('Should not call dispatch addTodo when no value',()=>{
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var el = ReactDOM.findDOMNode(addTodo);

    addTodo.refs.todo.value = '';
    TestUtils.Simulate.submit($(el).find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
