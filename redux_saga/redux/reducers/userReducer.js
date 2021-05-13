import * as type from "../types";

const initState = {
  users: [
    {
      id: "x1",
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ],
  loading: false,
  error: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case type.GET_USERS_REQUEST:
      return { ...state, loading: true };
      break;
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload],
      };
      break;
    case type.GET_USERS_FALIED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
