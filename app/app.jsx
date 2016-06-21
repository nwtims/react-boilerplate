var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Top = require('Top');


//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
<Top/>,
  document.getElementById('app')
);
