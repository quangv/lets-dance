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
      stiffness: 220,
      damping: 0
    }
    var preset2 = {
      stiffness: 200,
      damping: 0
    }
    return (
      <svg height="300" width="500" className="dancefloor">
        <rect x="0" y="200" width="500" height="100" style={{fill:'brown', stroke:'pink', strokeWidth:5, fillOpacity:0.8, strokeOpacity:0.9}} />
        <RM.Motion defaultStyle={{x: 250, y:0, x2:250, x3:250, x4:250, x5:250, xp: 250, yp:0, x2p:250, x3p:250, x4p:250, x5p:250}} style={{
          x: RM.spring(0, preset),
          x2: RM.spring(220, preset),
          x3: RM.spring(350, preset),
          x4: RM.spring(500, preset),
          x5: RM.spring(700, preset),
          y: RM.spring(100, preset),

          xp: RM.spring(0, preset2),
          x2p: RM.spring(220, preset2),
          x3p: RM.spring(350, preset2),
          x4p: RM.spring(500, preset2),
          x5p: RM.spring(700, preset2),
          yp: RM.spring(100, preset2)

        }}>

          {value =>
            <g>

              <circle cx={value.x} cy={value.y} r="10" fill="red" />
              <circle cx={value.x} cy={value.y * 1.30} r="10" fill="blue" />
              <circle cx={value.x} cy={value.y * 1.70} r="10" fill="lime" />
              <circle cx={value.x} cy={value.y * 2.40} r="10" fill="purple" />
              <circle cx={value.x} cy={value.y * 3.40} r="10" fill="yellow" />
              <circle cx={value.x} cy={value.y * 4.40} r="10" fill="orange" />
              <circle cx={value.x} cy={value.y * 5.40} r="10" fill="red" />
              <circle cx={value.x} cy={value.y * 7.40} r="10" fill="yellow" />

              <circle cx={value.x2} cy={value.y * 7.70} r="10" fill="lime" />
              <circle cx={value.x2} cy={value.y * 5.70} r="10" fill="yellow" />
              <circle cx={value.x2} cy={value.y * 4.70} r="10" fill="yellow" />
              <circle cx={value.x2} cy={value.y * 3.70} r="10" fill="orange" />
              <circle cx={value.x3} cy={value.y * 7.70} r="10" fill="purple" />
              <circle cx={value.x3} cy={value.y * 4.70} r="10" fill="orange" />
              <circle cx={value.x3} cy={value.y * 2.70} r="10" fill="blue" />
              <circle cx={value.x3} cy={value.y * 3.70} r="10" fill="lime" />

              <circle cx={value.x4} cy={value.y * 9.40} r="10" fill="red" />
              <circle cx={value.x4} cy={value.y * 6.40} r="10" fill="green" />
              <circle cx={value.x4} cy={value.y * 5.40} r="10" fill="blue" />
              <circle cx={value.x4} cy={value.y * 4.40} r="10" fill="yellow" />
              <circle cx={value.x4} cy={value.y * 3.40} r="10" fill="orange" />
              <circle cx={value.x4} cy={value.y * 2.40} r="10" fill="green" />
              <circle cx={value.x4} cy={value.y * 1.40} r="10" fill="blue" />




              <circle cx={value.xp} cy={value.yp} r="10" fill="red" />
              <circle cx={value.xp} cy={value.yp * 1.30} r="10" fill="blue" />
              <circle cx={value.xp} cy={value.yp * 1.70} r="10" fill="lime" />
              <circle cx={value.xp} cy={value.yp * 2.40} r="10" fill="purple" />
              <circle cx={value.xp} cy={value.yp * 3.40} r="10" fill="yellow" />
              <circle cx={value.xp} cy={value.yp * 4.40} r="10" fill="orange" />
              <circle cx={value.xp} cy={value.yp * 5.40} r="10" fill="red" />
              <circle cx={value.xp} cy={value.yp * 7.40} r="10" fill="yellow" />

              <circle cx={value.x2p} cy={value.yp * 7.70} r="10" fill="lime" />
              <circle cx={value.x3p} cy={value.yp * 7.70} r="10" fill="purple" />

              <circle cx={value.x4p} cy={value.yp * 9.40} r="10" fill="red" />
              <circle cx={value.x4p} cy={value.yp * 6.40} r="10" fill="green" />
              <circle cx={value.x4p} cy={value.yp * 5.40} r="10" fill="blue" />
              <circle cx={value.x4p} cy={value.yp * 4.40} r="10" fill="yellow" />
              <circle cx={value.x4p} cy={value.yp * 3.40} r="10" fill="orange" />
              <circle cx={value.x4p} cy={value.yp * 2.40} r="10" fill="green" />
              <circle cx={value.x4p} cy={value.yp * 1.40} r="10" fill="blue" />

            </g>
          }
        </RM.Motion>
        <text x="250" y="150" className="dancetext">
          Let's Boogie
        </text>
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
