import * as type from "../types";

export const getUsers = (users) => {
  return { type: type.GET_USERS_REQUEST, payload: users };
};
