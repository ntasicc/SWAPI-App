import { createSlice } from "@reduxjs/toolkit";

const swDataSlice = createSlice({
  name: "swData",
  initialState: {
    count: 0,
    next: "",
    previous: "",
    results: [],
    isLoading: false,
    errorOccurred: false,
  },
  reducers: {
    addNewData(state, action) {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
      state.isLoading = false;
      state.errorOccurred = false;
    },
    isLoading(state) {
      state.isLoading = true;
    },

    setError(state) {
      state.errorOccurred = true;
      state.isLoading = false;
    },
  },
});

export const swDataActions = swDataSlice.actions;

export default swDataSlice;
