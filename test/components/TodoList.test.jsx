var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('../../public/scripts/components/TodoList');
var Todo = require('../../public/scripts/components/Todo');

describe('TodoList',()=>{
  it('Should be Exist',()=>{
    expect(TodoList).toExist();
  })

  it('Should render one Todo component for each todo item',()=>{
    var todos =[{id:1,todo:'play football'},{id:2,todo:'do something'},{id:3,todo:'anything'}];
    var todolist = TestUtils.renderIntoDocument(<TodoList todolist={todos}/>);
    var findTodosCom = TestUtils.scryRenderedComponentsWithType(todolist,Todo);

    expect(findTodosCom.length).toBe(todos.length);
  })

  it('Should render Nothing To Do if todolist empty',()=>{
    var todos =[];
    var todolist = TestUtils.renderIntoDocument(<TodoList todolist={todos}/>);
    var el = ReactDOM.findDOMNode(todolist);
    var $el = $(el).find("h3").text();
    expect($el).toBe("Nothing To Do");
  })
})
