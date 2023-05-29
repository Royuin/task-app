import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  render() {
    return (
      <>
        <h1>Task App</h1>
        <Form handleSubmit={this.props.handleSubmit} />
      </>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label htmlFor="task">New Task </label>
        <input type="text" id="task" name="task" required></input>
        <button onClick={this.props.handleSubmit}>Add task</button>
      </form>
    );
  }
}

export default Overview;
