import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username : "Ace"
  }

  userInputChange = (event) => {
    this.setState({ username : event.target.value });
    event.target.value = this.state.username;
  }

  render() {
    return (
      <div className="App">
        <UserInput userInputChange={this.userInputChange} value={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="Ben" />
        <UserOutput username="Cat" />
      </div>
    );
  }
}

export default App;
