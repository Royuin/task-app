import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h1>Task App</h1>
        <Form />
      </>
    );
  }
}

class Form extends Overview {
  render() {
    return (
      <form>
        <label for="task">New Task </label>
        <input type="text" id="task" name="task" required></input>
        <button onClick={this.handleSubmit}>Add task</button>
      </form>
    );
  }
}

export default Overview;
