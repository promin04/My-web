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
    expect(main.state.todolist[0].createAt).toBeA('number')
  })

  it('Should run handleOnClickTodo incomplete to completed',()=>{
    var main = TestUtils.renderIntoDocument(<MainComponent/>);
    main.setState({todolist:[{
      id:1,
      todo: 'play computer',
      completed: false,
      createAt:0,
      completedAt: null
    }]
  });
    expect(main.state.todolist[0].completed).toBe(false);
    main.handleOnClickTodo(1);
    expect(main.state.todolist[0].completed).toBe(true);
    expect(main.state.todolist[0].completedAt).toBeA('number')

  })

  it('Should run handleOnClickTodo completed to incomplete',()=>{
    var main = TestUtils.renderIntoDocument(<MainComponent/>);
    main.setState({todolist:[{
      id:1,
      todo: 'play computer',
      completed: true,
      createAt:0,
      completedAt: 221
    }]
  });
    expect(main.state.todolist[0].completed).toBe(true);
    main.handleOnClickTodo(1);
    expect(main.state.todolist[0].completed).toBe(false);
    expect(main.state.todolist[0].completedAt).toNotExist();

  })

})
