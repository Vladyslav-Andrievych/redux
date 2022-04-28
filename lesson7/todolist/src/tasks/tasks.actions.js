import * as tasksGateway from './tasks.gateway.js';
import { tasksListSelector } from './tasks.selectors.js';

export const TASKS_LIST_RECEIVED = 'TASKS/TASKS_LIST_RECEIVED';

export const tasksListReceived = (tasksList) => ({
  type: TASKS_LIST_RECEIVED,
  payload: {
    tasksList,
  },
});

export const getTasksList = () => {
  return function (dispatch) {
    tasksGateway
      .fetchTasksList()
      .then((tasksList) => dispatch(tasksListReceived(tasksList)));
  };
};

export const updateTask = (taskId) => {
  return function (dispatch, getState) {
    const state = getState();
    const tasks = tasksListSelector(state);

    const taskToChange = tasks.find((task) => task.id === taskId);

    const updatedTask = {
      ...taskToChange,
      done: !taskToChange.done,
    };

    tasksGateway
      .toggleTaskStatus(updatedTask, taskId)
      .then(() => dispatch(getTasksList()));
  };
};

export const deleteTask = (taskId) => {
  return function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const createTask = (text) => {
  return function (dispatch) {
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };

    tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
  };
};
