var moment = require('moment');

export var searchText_reducer = (state='',action)=>{
  switch (action.type) {
    case 'searchText': return action.text;
    default: return state;
  }
}

export var showCompleted_reducer = (state=false,action)=>{
  switch (action.type) {
    case 'showCompleted': return !state;
    default: return state;
  }
}

export var TodoList_reducer = (state=[],action)=>{
  switch (action.type) {
    case 'addTodo': return [...state,{...action.todo}];
    case 'onClickTodo': return state.map((todolist)=>{
                                                          if(todolist.id===action.id){
                                                              return {
                                                                        ...todolist,
                                                                        ...action.update
                                                                      }
                                                              }else {
                                                                return todolist;
                                                              }
      });
      case 'getTodo': return [...action.todo];
      case 'logout' : return [];
      case 'clear' :  return [];
      case 'remove':  return state.filter((todo)=>{
                                                    return todo.id!==action.id;
                                                  })

      case 'edit': return state.map((todo)=>{
                                              if(todo.id===action.id){
                                                return {
                                                          ...todo,
                                                          todo:action.update,
                                                          processing:undefined

                                                }
                                              } else {
                                                return todo;
                                              }
                    })


      case 'processing': if(action.id){
                            return state.map((todo)=>{
                                                          if(todo.id===action.id){
                                                            if(action.processing!=='undefined'){
                                                              return {
                                                                      ...todo,
                                                                      processing:action.processing
                                                              }

                                                            } else {
                                                                    return {
                                                                            ...todo,
                                                                            processing:undefined
                                                                    }
                                                            }

                                                          }else {
                                                            return {
                                                                    ...todo,
                                                                    processing:undefined
                                                            }
                                                          }
                            })
                          } else {
                                  return state.map((todo)=>{
                                                            if(todo.processing){
                                                              return {
                                                                      ...todo,
                                                                      processing:undefined
                                                              }
                                                            }else {
                                                                    return todo;
                                                            }
                                  })
                            }


    default: return state;
  }
}

export var auth_reducer = (state={},action)=>{
  switch (action.type) {
    case 'login':  return {uid:action.uid};
    case 'logout': return {};
    default: return state;
  }
}

export var completedCount_reducer = (state=0,action)=>{
  switch (action.type) {
    case 'count': return action.count;
    default: return state;
  }
}

export var appState_reducer = (state='setAdd',action)=>{
  switch (action.type) {
    case 'setAdd': return action.type;
    case 'setRemove': return action.type;
    case 'setEdit': return action.type;

    default: return state;

  }
}
