import { ADD } from './actionsTypes';

const clientsAction = (name, age, email) => ({
  type: ADD,
  payload: {
    name,
    age,
    email,
  }
});

export default clientsAction;