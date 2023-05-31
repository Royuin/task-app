import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.props.handleSubmit.bind(this);
    this.state = this.props.state;
  }

  renderTasks = () => {
    let tasksArray = this.props.state.tasks;
    const taskItems = tasksArray.map((task) => {
      return <li key={task.taskId}>{task.taskValue} </li>;
    });
    return <ul>{taskItems}</ul>;
  };

  render() {
    return (
      <>
        <h1>Task App</h1>
        <Form
          handleSubmit={this.props.handleSubmit}
          renderTasks={this.renderTasks}
        />
        <h2>Tasks</h2>
        {this.renderTasks()}
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
