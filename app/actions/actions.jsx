var moment = require('moment');
import firebase,{firebaseRef,githubProvider} from '../firebase/index'

export var searchText = (text) =>{
                                  return { type:"searchText",
                                           text
                                         }
};

export var showCompleted = () =>{
                                  return { type:"showCompleted"}
};

export var onClickTodo = (id,update) =>{
                                  return { type:"onClickTodo",
                                           id,
                                           update
                                         }
};

export var startOnClickTodo = (id,completed) =>{
  return (dispatch)=>{
                      var update = {
                                completed:!completed,
                                completedAt:completed?null:moment().unix()
                      }
                      var callback = firebaseRef.child('todolist/'+id)
                      .update(update);
                      return callback.then(()=>{
                                                dispatch(onClickTodo(id,update));
                      },(error)=>{
                                  console.log('Cannot update completed state',error);
                                })
  }
}

export var addTodo = (todo) =>{
                                  return { type:"addTodo",
                                           todo
                                         }
};

export var startAddTodo = (text)=>{
  return (dispatch)=>{
    var todo = {
                todo: text,
                completed: false,
                createAt: moment().unix(),
                completedAt: null
    };
    var pushCallback=firebaseRef.child('todolist').push(todo);
    return pushCallback.then(()=>{
                            dispatch(addTodo({...todo,id:pushCallback.key}));
    })
  }
}

export var startGetTodo =()=>{
  return(dispatch)=>{
    return firebaseRef.child('todolist').once("value",(snapshot)=>{
      var RawTodo = snapshot.val() || {} ;
      var TodoList =[];
      Object.keys(RawTodo).forEach((TodoId)=>{
        var todo = {
                      id:TodoId,
                      ...RawTodo[TodoId]
        };
        TodoList.push(todo);
      })
      dispatch(getTodo(TodoList))
    }
  )

  }
}

export var getTodo = (todo) =>{
                                  return { type:"getTodo",
                                           todo
                                         }
};

export var Login = ()=>{
  return (dispatch,getState)=>{
    return firebase.auth().signInWithPopup(githubProvider).then(
      (data)=>{console.log("login",data)},
      (error)=>{console.log("fail",error)}
  )
  }
}

export var Logout = ()=>{
  return (dispatch,getState)=>{
    return firebase.auth().signOut().then(()=>{
      console.log('Log Out!!!');
    })
  }
}

export var handleLogin = (uid)=>{
    return {type: 'login',
            uid
    }
}

export var handeLogout = ()=>{
    return {
      type:'logout'
    }
}
