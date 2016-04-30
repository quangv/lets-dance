var ReactDOM = require('react-dom')
var React = require('react')

class LightSwitch extends React.Component {

  handleClick(event) {
    event.preventDefault()
    this.props.togglePower();
  }

  render() {
    var power;

    if(this.props.power){
      power = "On"
    } else {
      power = "Off"
    }

    return <div onClick={this.handleClick.bind(this)}>LightSwitch {power}</div>
  }
}
LightSwitch.propTypes = {
  power: React.PropTypes.bool,
  togglePower: React.PropTypes.func
}

class Floor extends React.Component {

  render() {
    var msg;

    if(this.props.power){
      msg = "Let's Dance."
    } else {
      msg = ""
    }
    return <div>Floor {msg}</div>
  }
}
Floor.propTypes = {
  power: React.PropTypes.bool
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      power: false
    }

    this.togglePower = this.togglePower.bind(this)
  }

  togglePower() {
    this.setState({power: !this.state.power});
  }

  render() {
    return <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <LightSwitch power={this.state.power} togglePower={this.togglePower} />
        </div>
        <div className="col-sm-9">
          <Floor power={this.state.power} />
        </div>
      </div>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
