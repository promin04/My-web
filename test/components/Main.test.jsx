var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('../../app/store/configureStore')
var MainComponent = require('../../public/scripts/components/Main')
var {TodoList} = require('../../public/scripts/components/TodoList')

describe('MainComponent',()=>{
  it('Should be Exist',()=>{
    expect(MainComponent).toExist();
  })

  it('Should render TodoList',()=>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    );
    var mainComponent = TestUtils.scryRenderedComponentsWithType(provider,MainComponent)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(mainComponent,TodoList);

    expect(todoList.length).toEqual(1);
  });
});
