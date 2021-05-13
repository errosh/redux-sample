import { put, call, takeEvery } from "redux-saga/effects";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

const getApiUsers = async () => {
  return await fetch(apiUrl, {
    method: "GET",
    "Content-Type": "application/json",
  })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
};

function* getUsers() {
  try {
    const users = yield call(getApiUsers);
    yield put({ type: "GET_USERS_SUCCESS", payload: users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", error: err.message });
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUEST", getUsers);
}
export default userSaga;
