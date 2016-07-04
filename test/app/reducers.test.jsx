var expect = require('expect');

var reducers = require('../../app/reducers/reducers');


describe('Reducers',()=>{

describe('searchText_reducer',()=>{
  it('Should be return text from searchbox',()=>{
    var action = {
                      type: 'searchText',
                      text: 'mos'
    }
    var result = reducers.searchText_reducer('',action);
    expect(result).toBe(action.text);
  })
})

describe('showCompleted_reducer',()=>{
  it('Should be return inverse value true or false',()=>{
    var action = {
                      type: 'showCompleted',
    }
    var result = reducers.showCompleted_reducer(false,action);
    expect(result).toBe(true);
  })
})



describe('TodoList_reducer',()=>{
  it('Should be return [...todo] ',()=>{
    var action = {
                      type: 'addTodo',
                      todo: {id:1,
                            todo:'go to the bed',
                            completed:false,
                            completedAt:5000}
    }
    var result = reducers.TodoList_reducer([],action);
    console.log(result);
    expect(result[0]).toEqual(action.todo);
    expect(result.length).toBe(1);
  })

  it('Should be return inverse value when click todo ',()=>{
    var action = {
                      type: 'addTodo',
                      todo: {id:1,
                            todo:'go to the bed',
                            completed:false,
                            completedAt:undefined}
    }

    var result1 = reducers.TodoList_reducer([],action);
    expect(result1[0].completed).toBe(false);
    expect(result1[0].completedAt).toBe(undefined);
    action = {
                      type: 'onClickTodo',
                      id:1,
                      update:{
                                completed:true,
                                completedAt:2510
                      }
    }
    var result2 = reducers.TodoList_reducer(result1,action);
    expect(result2[0].completed).toBe(true);
    expect(result2[0].completedAt).toBeA('number');
  })

    it('Should getTodo',()=>{
    var action ={
                  type: 'getTodo',
                  todo:[
                        {
                          id:1,
                          todo:'go to the bed'
                        },{
                          id:2,
                          todo:'go to school'
                        }
                      ]
    }
    var result = reducers.TodoList_reducer([],action);
    expect(result.length).toBe(2);
    })

})

})
