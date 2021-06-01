import { ADD } from '../actions/actionsTypes';

const INICIAL_STATE = ({
  clientsData:[{ 
  name:"",
  age:"",
  email: "",
}]});

const clientsReducer = (state = INICIAL_STATE, action) => {
  switch(action.type) {
    case ADD:
      return ({
        ...state,
        clientsData: [...state.clientsData, {
          name: action.payload.name,
          age: action.payload.age,
          email: action.payload.email,
        }],
      });
    default:
      return state;
  }
}

export default clientsReducer;