import { SUBMIT } from './actionsTypes';

const loginAction = (email, password) => ({
  type: SUBMIT,
  payload: {
    email,
    password,
  }
});

export default loginAction;