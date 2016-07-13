import firebase,{firebaseRef,githubProvider} from '../firebase/index'
var {completedCount} = require('./actions');

export var clear = ()=>{
  return {
    type: 'clear'
  }
}

export var startClear = ()=>{
  return(dispatch,getState)=>{
      var uid = getState().auth.uid;
      firebaseRef.child('users/'+uid+'/todolist').set({})
        .then(
              ()=>{
                dispatch(clear());
                var todolist = getState().todolist;
                dispatch(completedCount(todolist));
              },
              (error)=>{console.log('Cannot clear',error)}
        )
  }
}



export var remove = (id)=>{
    return {
      type:'remove',
      id
    }
}

export var startRemove = (id)=>{
  return (dispatch,getState)=>{
    var uid = getState().auth.uid;
    firebaseRef.child('users/'+uid+'/todolist/'+id).remove()
    .then(
      ()=>{
            var todolist = getState().todolist;
            dispatch(completedCount(todolist));
            dispatch(remove(id));
      },
      (error)=>{console.log('Cannot remove',error);}
    )
  }
}

export var startEdit = (id,text)=>{
  return (dispatch,getState)=>{
    var uid = getState().auth.uid;
    var update = {
                  todo:text
    }
    firebaseRef.child('users/'+uid+'/todolist/'+id).update(update)
    .then(
      ()=>{
            var todolist = getState().todolist;
            dispatch(completedCount(todolist));
            dispatch(edit(id,text));
      },
      (error)=>{console.log('Cannot edit',error);}
    )
  }
}

export var setRemove =()=>{
  return {type:'setRemove'}
}

export var setAdd =()=>{
  return {type:'setAdd'}
}

export var setEdit =()=>{
  return {type:'setEdit'}
}

export var edit = (id,update)=>{
  return {
          type:'edit',
          id,
          update
  }
}

export var editInput = (text)=>{
  return {
          type:'editInput',
          input:text
  }
}

export var processing=(text,id)=>{
  return {
    type:'processing',
    processing:text,
    id
  }
}
