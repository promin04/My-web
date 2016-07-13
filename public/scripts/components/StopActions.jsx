var React = require('react');
var {connect} =require('react-redux');
var OtherButton_actions = require('../../../app/actions/OtherButton_actions');

export var StopActions = React.createClass({
  render:function () {

    var {appState,dispatch} = this.props;
    var message = appState==='setRemove'?'Delete':'Edit';


    return (
      <div className="stop-actions">
            <button className="button secondary expanded" onClick={()=>{
                dispatch(OtherButton_actions.setAdd());
                dispatch(OtherButton_actions.processing('undefined'));
            }}>Stop {message}</button>
      </div>
    )
  }
})

export default connect((state)=>{
                                  return {
                                          appState:state.appState
                                  }
})(StopActions)
