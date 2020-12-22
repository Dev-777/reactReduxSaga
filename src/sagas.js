import { put, takeLatest, call } from "redux-saga/effects";
import { LOAD_DATA, putData } from "./actions";

function fetchData() {
  return fetch("http://jsonplaceholder.typicode.com/todos/1").then((res) =>
    res.json()
  );
}
function* workerLoadData() {
  const data = yield call(fetchData);
  yield put(putData(data));
}

export function* watchLoadData() {
  yield takeLatest(LOAD_DATA, workerLoadData);
}
