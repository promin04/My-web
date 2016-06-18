var React = require('react');

var Nav = require('./Nav')

var MainComponent = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="small-centered medium-6 large-4 columns">

          {this.props.children}
          </div>
        </div>
      </div>

    )
  }
})

module.exports = MainComponent;
