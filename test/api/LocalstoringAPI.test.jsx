var expect = require('expect');
var todoAPI = require('../../public/api/todoAPI');
describe('todoAPI',()=>{
  beforeEach(()=>{
      localStorage.removeItem('todo');
  })

  it('todoAPI should be exist',()=>{
    expect(todoAPI).toExist();
  })
    describe('saveToLocal',()=>{
      it('Should save TodoList To localStorage',()=>{
        var todo = [{
            id:1,
            todo:'play game',
            completed: false
        }]
        todoAPI.saveToLocal(todo);

    var result = JSON.parse(localStorage.getItem('todo'));

    expect(result).toEqual(todo);
      })
      it('Should not save invalid todo',()=>{
        var badtodo = {
            id:2,
            todo:'play football',
            completed: false
        };
        todoAPI.saveToLocal(badtodo);

    var result = JSON.parse(localStorage.getItem('todo'));

    expect(result).toEqual(null);
      })

    })

    describe('getDataLocal',()=>{
      it('Should get TodoList from localStorage',()=>{
        var todo = [{
            id:1,
            todo:'play game',
            completed: false
        }]
        var todoStr = JSON.stringify(todo);
        localStorage.setItem('todo',todoStr)

        var result = todoAPI.getDataLocal();

    expect(result).toEqual(todo);
      })
      it('Should get [] when data invalid',()=>{
        var badtodo = {
            id:2,
            todo:'play football',
            completed: false
        };
        var badtodoStr = JSON.stringify(badtodo);
        localStorage.setItem('todo',badtodoStr)
    var result = todoAPI.getDataLocal();
    expect(result).toEqual([]);
      })

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
