var React = require('react');
var {connect} = require('react-redux');
var OtherButton_actions = require('../../../app/actions/OtherButton_actions')

export var OtherButton = React.createClass({
  render:function () {
    var {dispatch} = this.props;
    return (
              <div className="row">
                    <button className="warning button small-4 large-4 columns" onClick={
                                                                                            ()=>{dispatch(OtherButton_actions.setEdit())
                                                                                            }
                                                                                          }
                    >
                      Edit
                    </button>

                    <button className="alert button small-4 large-4 columns" onClick={
                                                                                            ()=>{dispatch(OtherButton_actions.setRemove())
                                                                                                dispatch(OtherButton_actions.processing('undefined'))
                                                                                            }
                                                                                          }
                    >
                      Delete
                    </button>

                    <button className="secondary button small-4 large-4 columns" onClick={
                                                                                            ()=>{dispatch(OtherButton_actions.startClear())
                                                                                            }
                                                                                          }
                    >
                      Clear
                    </button>
              </div>
    )
  }
})

export default connect()(OtherButton);
