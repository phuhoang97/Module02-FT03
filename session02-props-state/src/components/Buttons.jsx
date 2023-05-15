import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className='Buttons'>
        {!this.props.isRunning && (
          <button onClick={this.props.startTimer}>Start</button>
        )}
        {this.props.isRunning && (
          <button onClick={this.props.stopTimer}>Stop</button>
        )}
        <button onClick={this.props.resetTimer}>Reset</button>
      </div>
    );
  }
}
