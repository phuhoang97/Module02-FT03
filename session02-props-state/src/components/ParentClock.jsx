import React, { Component } from "react";
import Timer from "./Timer";
import Buttons from "./Buttons";

class ParentClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    this.setState({ isRunning: true });
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({ time: 0, isRunning: false });
  };

  render() {
    return (
      <div className='App'>
        <Timer time={this.state.time} />
        <Buttons
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
          isRunning={this.state.isRunning}
        />
      </div>
    );
  }
}

export default ParentClock;
