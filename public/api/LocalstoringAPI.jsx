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
  }
}
