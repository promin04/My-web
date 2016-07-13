var React = require('react')
var ReactDOM = require('react-dom');
var {Router,Route,IndexRoute,hashHistory} = require('react-router');
var {Provider} = require('react-redux')
import firebase,{firebaseRef} from '../../app/firebase/index';

var actions = require('../../app/actions/actions')
var store = require('../../app/store/configureStore').configure();
var todoAPI = require('../api/todoAPI');
var MainComponent = require('./components/Main').default;
var Login = require('./components/Login').default
//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../css/style.scss');



firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(actions.handleLogin(user.uid));
    store.dispatch(actions.startGetTodo());
    hashHistory.push('/todos');

  }else {
    store.dispatch(actions.handeLogout());
    hashHistory.push('/');
  }
})



var noUserLogin = function (nextState,replace,next) {
    if(!firebase.auth().currentUser){
      replace('/');
    }
next();
}

var hasUserLogin = function (nextState,replace,next) {
    if(firebase.auth().currentUser){
      replace('/todos');
    }
next();
}


ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/'>
      <Route path='todos' component={MainComponent} onEnter={noUserLogin}/>
      <IndexRoute component={Login} onEnter={hasUserLogin}/>
    </Route>

  </Router>

  </Provider>


  ,
  document.getElementById('content')
)
