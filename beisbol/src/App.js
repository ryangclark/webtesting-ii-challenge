import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    ballCount: 0,
    strikeCount: 0
  };

  handleBall = () => {
    if (this.ballCount === 3) {
      this.setState({
        ballCount: 0,
        strikeCount: 0
      });
    } else {
      this.setState({
        ballCount: this.ballCount + 1
      });
    }
  };
  handleFoul = () => {
    if (this.strikeCount === 2) {
      return;
    } else {
      this.setState({
        strikeCount: this.strikeCount + 1
      });
    }
  };
  handleHit = () => {
    this.setState({
      ballCount: 0,
      strikeCount: 0
    });
  };
  handleStrike = () => {
    if (this.strikeCount === 2) {
      this.setState({
        ballCount: 0,
        strikeCount: 0
      });
    } else {
      this.setState({
        strikeCount: this.strikeCount + 1
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Beisbol App</h1>
        </header>
        <table className="at-bat">
          <tr>
            <th>Balls</th>
            <th>Strikes</th>
          </tr>
          <tr>
            <td>{this.state.ballCount}</td>
            <td>{this.state.strikeCount}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
