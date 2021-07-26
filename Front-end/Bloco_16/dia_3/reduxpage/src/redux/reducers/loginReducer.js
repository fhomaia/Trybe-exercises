import { SUBMIT } from '../actions/actionsTypes';

const INICIAL_STATE = ({
  email: "",
  password: "",
});

const loginReducer = (state = INICIAL_STATE, action) => {
  switch(action.type) {
    case SUBMIT:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      }
    default:
      return state;
  }
}

export default loginReducer;