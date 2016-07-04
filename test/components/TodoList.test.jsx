var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import ConnectedTodoList,{TodoList} from '../../public/scripts/components/TodoList';
import ConnectedTodo,{Todo} from '../../public/scripts/components/Todo';
import {configure} from '../../app/store/configureStore';


describe('TodoList',()=>{
  it('Should be Exist',()=>{
    expect(TodoList).toExist();
  })

  it('Should render one Todo component for each todo item',()=>{
    var todolist =[{
      id:1,
      todo:'play football',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },{
      id:2,
      todo:'do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store= configure({todolist});
    var provider = TestUtils.renderIntoDocument(
                                                  <Provider store={store}>
                                                            <ConnectedTodoList/>
                                                  </Provider>
                                                );
    var connectTodoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0];

    var todoCom = TestUtils.scryRenderedComponentsWithType(connectTodoList,ConnectedTodo);

    expect(todoCom.length).toBe(todolist.length);
  })

  it('Should render Nothing To Do if todolist empty',()=>{
    var todos =[];
    var todoList = TestUtils.renderIntoDocument(<TodoList todolist={todos} showCompleted={'fales'} searchText={''}/>);
    var el = ReactDOM.findDOMNode(todoList);

    var $el = $(el).find("h3").length;
    expect($el).toBe(1);
  })
})
