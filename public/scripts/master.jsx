var React = require('react')
var ReactDOM = require('react-dom');
var {Router,Route,IndexRoute,hashHistory} = require('react-router');

var MainComponent = require('./components/Main');
var Timer = require('./components/Timer');
var Countdown = require('./components/Countdown');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../css/style.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>

      <Route path="/countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>

  ,
  document.getElementById('content')
)
