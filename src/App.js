import { Component } from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Overview handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
