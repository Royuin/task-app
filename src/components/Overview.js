import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.props.handleSubmit.bind(this);
    this.state = this.props.state;
  }

  renderTasks = () => {
    console.log(this.props.state.tasks);
  };

  render() {
    return (
      <>
        <h1>Task App</h1>
        <Form
          handleSubmit={this.props.handleSubmit}
          renderTasks={this.renderTasks}
        />
      </>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.renderTasks = this.props.renderTasks;
  }

  render() {
    return (
      <form>
        <label htmlFor="task">New Task </label>
        <input type="text" id="task" name="task" required></input>
        <button
          onClick={(e) => {
            this.props.handleSubmit(e);
            this.renderTasks();
          }}
        >
          Add task
        </button>
      </form>
    );
  }
}

export default Overview;
