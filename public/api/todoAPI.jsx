module.exports = {
  saveToLocal: function (todo) {
    if(Array.isArray(todo)){
      var todoStr = JSON.stringify(todo);
      localStorage.setItem("todo",todoStr);

    }
  },

  getDataLocal: function () {
    var todo = localStorage.getItem("todo");
    try {
      todo = JSON.parse(todo);
    } catch (e) {
      console.log('Cannot parse str to json');
    }

    if(Array.isArray(todo)){
      return todo;
    } else {
      todo=[];
      return todo;
    }
  },

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
