import { call, put, take, fork } from "redux-saga/effects";
import { characterActions } from "../store/character-slice";
import axios from "axios";

export function* fetchPlanetSaga(planetURL) {
  yield put(characterActions.isLoading());
  const response = yield call(axios.get, planetURL);
  if (response.status !== 200) yield put(characterActions.setError);
  yield put(characterActions.addHomeworld(response.data));
}

export function* watchFetchPlanetSaga() {
  while (true) {
    const req = yield take("FETCH_PLANET");
    yield fork(fetchPlanetSaga, req.payload);
  }
}
