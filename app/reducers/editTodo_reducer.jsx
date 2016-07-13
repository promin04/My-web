export var editInput_reducer =(state='',action)=> {
  switch (action.type) {
    case 'editInput': return action.input;


    default: return state;

  }
}
