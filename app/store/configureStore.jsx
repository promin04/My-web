var redux = require('redux');
var thunk = require('redux-thunk').default;

import {searchText_reducer,showCompleted_reducer,TodoList_reducer,auth_reducer} from '../reducers/reducers';

export var configure = (initialState={})=>{
  var reducers = redux.combineReducers({
    showCompleted:showCompleted_reducer,
    searchText: searchText_reducer,
    todolist: TodoList_reducer,
    auth: auth_reducer
  })

  var store = redux.createStore(reducers,initialState,redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
