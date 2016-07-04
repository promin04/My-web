var expect = require('expect')
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var actions = require('../../app/actions/actions');
import firebase,{firebaseRef} from '../../app/firebase/index'

const mockStore = configureStore([thunk]);

describe('Actions',()=>{
  it('searchText',()=>{
    var text = {type:"searchText",text:"hello"}
    var result = actions.searchText(text.text);
    expect(result).toEqual(text);
  })

  it('showCompleted',()=>{
    var text = {type:"showCompleted"}
    var result = actions.showCompleted();
    expect(result).toEqual(text);
  })


  it('onClickTodo',()=>{
    var text = {
                type:"onClickTodo",
                id:2,
                update:{
                        completed:true,
                        completedAt:2510
                }
    }
    var result = actions.onClickTodo(text.id,text.update);
    expect(result).toEqual(text);
  })

  it('startAddTodo',(done)=>{
    var store = mockStore({});
    var text = 'go to the bed';
    store.dispatch(actions.startAddTodo(text)).then(()=>{

      expect(store.getActions()[0]).toInclude({type:"addTodo"})
      var lastId = store.getActions()[0].todo.id;
      firebaseRef.child('todolist/'+lastId).remove();
        done()
    }).catch(done);

  })


  it('addTodo',()=>{
    var text = {type:"addTodo",todo:{id:1,
                                      todo:'go to the bed',
                                      completed:false,
                                      completedAt:undefined}
    }
    var result = actions.addTodo(text.todo);
    expect(result).toEqual(text);
  })

  it('getTodo',()=>{
    var text = {type:"getTodo",todo:[{id:1,todo:"play game"}]}
    var result = actions.getTodo(text.todo);
    expect(result).toEqual(text);
  })




  describe('Test with firebase',()=>{
    var testTodoRef;

    beforeEach((done)=>{
      testTodoRef = firebaseRef.child('todolist').push();
      testTodoRef.remove().then(()=>{
                                      testTodoRef.set({
                                                        todo:'Something to do',
                                                        completed: false,
                                                        createAt:5201
                                                      }
                                    ).then(
                                            ()=>done(),
                                            (error)=>{console.log('Cannot set todo for test'),error}
                                  );
      })

    })

    afterEach((done)=>{
      testTodoRef.remove()
      .then(()=>done());
    })

    it('startOnClickTodo',(done)=>{
      var store = mockStore({});

      store.dispatch(actions.startOnClickTodo(testTodoRef.key,false)).then(
        ()=>{
          console.log(store.getActions()[0].update);
          expect(store.getActions()[0].update).toInclude({completed:true})
          expect(store.getActions()[0].update.completedAt).toExist();
          done();
        }
        ,done
      )
    })

    it('startGetTodo',(done)=>{
      var store = mockStore({});

      store.dispatch(actions.startGetTodo()).then(
        ()=>{
          //console.log(store.getActions()[0]);
          expect(store.getActions()[0]).toInclude({type:'getTodo'})
          done()
        },done
      )



    })


  })

  })
