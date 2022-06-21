import { spawn } from "redux-saga/effects";
import { watchFetchSWDataSaga } from "./sw-saga";
export default function* rootSaga() {
  yield spawn(watchFetchSWDataSaga);
}
