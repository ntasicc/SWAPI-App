import { call, put, take, fork, all, cancel } from "redux-saga/effects";
import { filmsActions } from "../store/films-slice";
import axios from "axios";

export function* fetchFromSWAPI(url) {
  const response = yield call(axios.get, url);
  if (response.status !== 200) yield put(filmsActions.setError);
  return response;
}

export function* fetchFilmsDataSaga(filmsURL) {
  yield put(filmsActions.isLoading());
  const response = yield all(filmsURL.map((url) => call(fetchFromSWAPI, url)));
  const films = response.map((film) => {
    return film.data;
  });
  yield put(filmsActions.addFilms(films));
}

export function* watchFetchFilmsDataSaga() {
  while (true) {
    const req = yield take("FETCH_FILMS");
    const task = yield fork(fetchFilmsDataSaga, req.payload);
    yield take("STOP_FETCHING_FILMS");
    cancel(task);
  }
}
