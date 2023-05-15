import React, { Component } from "react";

export default class Timer extends Component {
  formatTime = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  render() {
    return (
      <div className='Timer'>
        <h1>{this.formatTime(this.props.time)}</h1>
      </div>
    );
  }
}
