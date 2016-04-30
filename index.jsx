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
      power = "Turn Off"
    } else {
      power = "Turn On"
    }

    return <div>
      <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>{power}</button>
    </div>
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
      return <div className="dark">It's Dark</div>
    }
  }
}
Floor.propTypes = {
  power: React.PropTypes.bool
}


class DanceFloor extends React.Component {
  render() {
    /*
    <RM.Motion defaultStyle={{x: 0}} style={{x: RM.spring(10)}}>
      {value => <div>{value.x}</div>}
    </RM.Motion>
    */
    var preset = {
      stiffness: 200,
      damping: 0
    }
    return (
      <svg height="300" width="500" className="dancefloor">
        <RM.Motion defaultStyle={{x: 250, y:0}} style={{x: RM.spring(0, preset), y: RM.spring(100, preset)}}>
          {value =>
            <g>
              <circle cx={value.x} cy={value.y} r="10" fill="red" />
              <circle cx={value.x} cy={value.y * 1.30} r="10" fill="blue" />
              <circle cx={value.x} cy={value.y * 1.70} r="10" fill="lime" />
              <circle cx={value.x} cy={value.y * 2.40} r="10" fill="purple" />
              <circle cx={value.x} cy={value.y * 3.40} r="10" fill="yellow" />
              <circle cx={value.x} cy={value.y * 4.40} r="10" fill="orange" />
            </g>
          }
        </RM.Motion>
      </svg>
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
