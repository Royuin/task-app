import { Component } from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tasks = [];
  }

  handleSubmit(e) {
    e.preventDefault();
    const thisTask = document.getElementById('task').value;
    this.tasks.push(thisTask);
  }

  render() {
    return (
      <div className="App">
        <Overview handleSubmit={this.handleSubmit} tasks={this.tasks} />
      </div>
    );
  }
}

export default App;
