var ReactDOM = require('react-dom')
var React = require('react')

var RM = require('react-motion');



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
    if(this.props.power){
      return <DanceFloor />
    } else {
      return <div>It's Dark</div>
    }
  }
}
Floor.propTypes = {
  power: React.PropTypes.bool
}


class DanceFloor extends React.Component {
  render() {
    return (
      <RM.Motion defaultStyle={{x: 0}} style={{x: RM.spring(10)}}>
        {value => <div>{value.x}</div>}
      </RM.Motion>
    )
  }
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
