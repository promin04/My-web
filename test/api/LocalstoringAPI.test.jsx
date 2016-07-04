var expect = require('expect');
var todoAPI = require('../../public/api/todoAPI');
describe('todoAPI',()=>{
  beforeEach(()=>{
      localStorage.removeItem('todo');
  })

  it('todoAPI should be exist',()=>{
    expect(todoAPI).toExist();
  })


    describe('filterTodolist',()=>{
        var todolist = [{
                          id: 1,
                          todo: 'newTodo',
                          completed: false
                        },{
                          id: 2,
                          todo: 'moster',
                          completed: true
                        },{
                          id: 3,
                          todo: 'mos',
                          completed: true
                        },{
                          id: 4,
                          todo: 'do homework',
                          completed: false
                        },{
                          id: 5,
                          todo: 'go to the bed',
                          completed: true
                      }]

        it('Should be shown all todo if showCompleted is true',()=>{
          var result=todoAPI.filterTodolist(todolist,true,'');
          expect(result.length).toBe(5);
        })

        it('Should be shown only uncomplete if showCompleted is false',()=>{
          var result=todoAPI.filterTodolist(todolist,false,'');
          expect(result.length).toBe(2);
        })

        it('Should be shown result of search by text if showCompleted is true',()=>{
          var result=todoAPI.filterTodolist(todolist,true,'mos');
          expect(result.length).toBe(2);
        })

        it('Should be shown result of search by text if showCompleted is false',()=>{
          var result=todoAPI.filterTodolist(todolist,false,'mos');
          expect(result.length).toBe(0);
        })

        it('Should be shown completed todo at bottom of list if showCompleted is true',()=>{
          var result=todoAPI.filterTodolist(todolist,true,'');
          expect(result[4].completed).toBe(true);
          expect(result[3].completed).toBe(true);
          expect(result[2].completed).toBe(true);
        })

        it('Should be shown completed todo at bottom of list if showCompleted is false',()=>{
          var result=todoAPI.filterTodolist(todolist,false,'');
          expect(result[1].completed).toBe(false);
        })

    })



})
