import { Component, useState } from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      tasks: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const taskValue = document.getElementById('task').value;
    this.setState({
      tasks: [...this.state.tasks, taskValue],
    });
  }

  render() {
    return (
      <div className="App">
        <Overview handleSubmit={this.handleSubmit} state={this.state} />
      </div>
    );
  }
}

export default App;
