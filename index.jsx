var ReactDOM = require('react-dom')
var React = require('react')

class Hello extends React.Component {

  render() {
    return <div>Hi, {this.props.name}!</div>
  }
}

ReactDOM.render(
  <Hello name="Cat" />,
  document.getElementById('app')
);
