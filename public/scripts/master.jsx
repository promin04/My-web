var React = require('react')
var ReactDOM = require('react-dom');
var {Router,Route,IndexRoute,hashHistory} = require('react-router');

var MainComponent = require('./components/Main');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../css/style.scss');

ReactDOM.render(
  <MainComponent/>

  ,
  document.getElementById('content')
)
