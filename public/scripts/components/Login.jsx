var React = require('react');
var {connect} = require('react-redux');
var actions = require('../../../app/actions/actions');
export var Login = React.createClass({
  onLogin:function () {
    var {dispatch} = this.props;
    dispatch(actions.Login());
  },
  render:function () {
    return (
            <div className="row">
              <div className="small-centered small-10 medium-8 large-6 columns">
                <h3 className="page-title">Log in Component</h3>
              <div className="callout callout-auth">
                <h3>Login</h3>
                <p>Login With GitHub account below.</p>
                <button className="button" onClick={()=>this.onLogin()}>Login With GitHub</button>
              </div>
              </div>
            </div>

    )
  }
})

export default connect()(Login);
