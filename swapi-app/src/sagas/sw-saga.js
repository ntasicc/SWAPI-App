import { call, put, take, fork } from "redux-saga/effects";
import { swDataActions } from "../store/swData-slice";
import axios from "axios";

export function* fetchSWDataSaga(url) {
  yield put(swDataActions.isLoading());
  const response = yield call(axios.get, url);
  if (response.status !== 200) yield put(swDataActions.setError);

  yield put(swDataActions.addNewData(response.data));
}

export function* watchFetchSWDataSaga() {
  while (true) {
    const req = yield take("FETCH_SWDATA");
    yield fork(fetchSWDataSaga, req.payload);
  }
}
