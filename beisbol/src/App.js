import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    ballCount: 0,
    strikeCount: 0
  };

  handleBall = () => {
    if (this.state.ballCount === 3) {
      this.setState({
        ballCount: 0,
        strikeCount: 0
      });
    } else {
      this.setState(prevState => ({
        ballCount: prevState.ballCount + 1
      }));
    }
  };

  handleFoul = () => {
    if (this.state.strikeCount < 2) {
      this.setState(prevState => ({
        strikeCount: prevState.strikeCount + 1
      }));
    }
  };

  // handleFoul = () => {
  //   if (this.state.strikeCount === 0 || this.state.strikeCount === 1) {
  //     this.setState({
  //       strikes: this.state.strikeCount + 1
  //     });
  //   } else if (this.state.strikeCount === 2) {
  //     this.setState({ strikeCount: this.state.strikeCount });
  //   }
  // };

  handleHit = () => {
    this.setState({
      ballCount: 0,
      strikeCount: 0
    });
  };

  handleStrike = () => {
    if (this.state.strikeCount === 2) {
      this.setState({
        ballCount: 0,
        strikeCount: 0
      });
    } else {
      this.setState(prevState => ({
        strikeCount: prevState.strikeCount + 1
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Beisbol App</h1>
        </header>
        <table>
          <tbody className="at-bat">
            <tr>
              <th>Balls</th>
              <th>Strikes</th>
            </tr>
            <tr>
              <td data-testid="ball-count">{this.state.ballCount}</td>
              <td data-testid="strike-count">{this.state.strikeCount}</td>
            </tr>
          </tbody>
        </table>
        <div className="dashboard">
          <button
            data-testid="ball-button"
            onClick={this.handleBall}
            type="button"
          >
            Ball
          </button>
          <button
            data-testid="strike-button"
            onClick={this.handleStrike}
            type="button"
          >
            Strike
          </button>
          <button
            data-testid="foul-button"
            onClick={this.handleFoul}
            type="button"
          >
            Foul
          </button>
          <button
            data-testid="hit-button"
            onClick={this.handleHit}
            type="button"
          >
            Hit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
