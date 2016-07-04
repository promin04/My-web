module.exports = {

  filterTodolist: function (todolist,showCompleted,searchText) {
    //filterTodolist show&hide Completed
    var filterTodolist = todolist;
    filterTodolist = filterTodolist.filter((todo)=>{
      return !todo.completed || showCompleted ;
    })
    //searchBox by text
    if(searchText.length>0){
      filterTodolist = filterTodolist.filter((todo)=>{
        var str = todo.todo.toLowerCase();
        var result=str.indexOf(searchText);
        if(result>=0){return 1};
      })
    }
    //sort uncomplete first
    filterTodolist.sort((a,b)=>{
        if(a.completed==false && b.completed==true){
          return -1 ;
        }else if (a.completed==true && b.completed==false) {
          return 1;
        }else {
          return 0;
        }
    })

    return filterTodolist;
  }
}
