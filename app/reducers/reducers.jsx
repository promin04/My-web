var moment = require('moment');

export var searchText_reducer = (state='',action)=>{
  switch (action.type) {
    case 'searchText': return action.text;

      break;
    default: return state;

  }
}

export var showCompleted_reducer = (state=false,action)=>{
  switch (action.type) {
    case 'showCompleted': return !state;

      break;
    default: return state;

  }
}




export var TodoList_reducer = (state=[],action)=>{
  switch (action.type) {
    case 'addTodo': return [...state,{...action.todo}];

    case 'onClickTodo': return state.map((todolist)=>{
                                                          if(todolist.id==action.id){
                                                            console.log(action.update);
                                                              return {
                                                                        ...todolist,
                                                                        ...action.update
                                                                      }
                                                              }else {
                                                                return todolist;
                                                              }
      });

      case 'getTodo': return [...action.todo
      ];
    default: return state;

  }
}
