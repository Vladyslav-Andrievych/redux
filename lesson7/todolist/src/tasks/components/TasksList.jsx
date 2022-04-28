import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateTaskInput from './CreateTaskInput.jsx';
import Task from './Task.jsx';
import * as tasksActions from '../tasks.actions.js';
import * as tasksSelectors from '../tasks.selectors.js';

class TasksList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    const { tasks } = this.props;

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              handleStatusChange={this.props.updateTask}
              handleTaskDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  tasks: tasksSelectors.sortedTasksListSelector(state),
});

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

export default connect(mapState, mapDispatch)(TasksList);
