// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading"> Speedometer</h1>
        <img
          alt="speedomter"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
        />
        <h1 className="heading"> Speed is {count}mph</h1>
        <p className="desc"> Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="butn-container">
          <button
            className="accelerate"
            type="button"
            onClick={this.accelerate}
          >
            {' '}
            Accelerate
          </button>
          <button className="brake" type="button" onClick={this.applyBrake}>
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
