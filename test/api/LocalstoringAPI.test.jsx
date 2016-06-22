var expect = require('expect');
var LocalstoringAPI = require('../../public/api/LocalstoringAPI');
describe('LocalstoringAPI',()=>{
  beforeEach(()=>{
      localStorage.removeItem('todo');
  })

  it('Should be exist',()=>{
    expect(LocalstoringAPI).toExist();
  })
    describe('saveToLocal',()=>{
      it('Should save TodoList To localStorage',()=>{
        var todo = [{
            id:1,
            todo:'play game',
            completed: false
        }]
        LocalstoringAPI.saveToLocal(todo);

    var result = JSON.parse(localStorage.getItem('todo'));

    expect(result).toEqual(todo);
      })
      it('Should not save invalid todo',()=>{
        var badtodo = {
            id:2,
            todo:'play football',
            completed: false
        };
        LocalstoringAPI.saveToLocal(badtodo);

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

        var result = LocalstoringAPI.getDataLocal();

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
    var result = LocalstoringAPI.getDataLocal();
    expect(result).toEqual([]);
      })

    })


})
