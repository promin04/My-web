var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');


import * as actions from '../../../app/actions/actions'
import * as OtherButton_actions from '../../../app/actions/OtherButton_actions'

export var Todo = React.createClass({

  render: function () {

    var {id,todo,completed,createAt,completedAt,dispatch,appState,processing,editInput}=this.props;

    var status= completed?"todo-completed":"todo";

    var currentAction=appState;






    ////////////
    // factions
    //////////

    var renderTodo= (processing)=>{

      if(processing==='edit'){
        return <textarea placeholder="Ender something" ref="editInput" value={editInput}
          onChange={()=>{
                          var newInput=this.refs.editInput.value;
                          dispatch(OtherButton_actions.editInput(newInput));
          }}/>
      }else {
        return todo;
      }
    }

    var renderAppState = (appState,processing)=>{
      if(!processing){
          switch (appState) {
            case 'setRemove':return ()=>{dispatch(OtherButton_actions.processing('remove',id))};
            case 'setEdit':  return ()=>{
                                          dispatch(OtherButton_actions.editInput(todo));
                                          dispatch(OtherButton_actions.processing('edit',id)
                              )};
            default: return ()=>{dispatch(actions.startOnClickTodo(id,completed))};
          }
      } else{
          return ()=>{};
      }
    }

    var renderDate = ()=>{
      if(completed){
      var message='Completed at '
      var completedTime = moment.unix(createAt).format('DD MMM @ hh:mm A')
      return message+completedTime;
      }else {
        var message = 'Create at ';
        var createTime = moment.unix(createAt).format('DD MMM @ hh:mm A')
        return message+createTime;
      }
    }

    var renderSymbol=(appState,processing)=>{
      if(!processing){
        switch (appState) {
          case 'setRemove': return <span className={currentAction}>Delete</span>;
          case 'setEdit': return <span className={currentAction}>Edit</span>;
          default: return'';
        }
      }else if(processing==='remove'){
          return <div><button className="yes" onClick={confirmRemove(id)}>Yes</button><button className="no" onClick={cancelAction(id)}>No</button></div>
      }else {
          return <div><button className="yes" onClick={confirmEdit(id,editInput)}>Done</button><button className="no" onClick={cancelAction(id)}>Cancel</button></div>
      }
    }
    var confirmEdit = (id,text)=>{
      return ()=>{dispatch(OtherButton_actions.startEdit(id,text))}
    }

    var cancelAction = (id)=>{
      return ()=>{dispatch(OtherButton_actions.processing('undefined',id))}
    }

    var confirmRemove = (id)=>{
      return ()=>{dispatch(OtherButton_actions.startRemove(id))}
    }




    //////////
    //return render
    /////////
    return (

      <div className={status} onClick={
          renderAppState(appState,processing)
        }>
          <input type="checkbox" checked={completed} onChange={()=>{}}/>
          <div className="small-10 large-10 columns">
            <p>{renderTodo(processing)}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>
          <div className="small-1 large-1 columns">
            {renderSymbol(appState,processing)}
          </div>
      </div>

    )
  }
})

export default connect((state)=>{
                                  return {
                                            appState:state.appState,
                                            editInput:state.editInput
                                  }

})(Todo);
