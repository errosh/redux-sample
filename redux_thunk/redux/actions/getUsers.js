import * as type from "../types";

export const getUsers = () => async (dispatch) => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());

  dispatch({
    type: type.GET_USERS,
    payload: result,
  });
};
