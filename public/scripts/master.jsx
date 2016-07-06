var React = require('react')
var ReactDOM = require('react-dom');
var {Router,Route,IndexRoute,hashHistory} = require('react-router');
var {Provider} = require('react-redux')
var actions = require('../../app/actions/actions')
var store = require('../../app/store/configureStore').configure();
var todoAPI = require('../api/todoAPI');
import firebase,{firebaseRef} from '../../app/firebase/index';
var MainComponent = require('./components/Main').default;
var Login = require('./components/Login').default

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../css/style.scss');



store.dispatch(actions.startGetTodo());

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={MainComponent}/>
      <Route path='login' component={Login}/>
    </Route>

  </Router>

  </Provider>


  ,
  document.getElementById('content')
)
