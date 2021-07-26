import { ADD, EXCLUDE } from './actionsTypes';

const clientsAddAction = (name, age, email) => ({
  type: ADD,
  payload: {
    name,
    age,
    email,
  }
});

export default clientsAddAction;

const clientsExcludeAction = (payload) => ({
  type: EXCLUDE,
  payload,
});

export { clientsExcludeAction, }