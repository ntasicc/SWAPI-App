import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import swDataSlice from "./swData-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    swData: swDataSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
