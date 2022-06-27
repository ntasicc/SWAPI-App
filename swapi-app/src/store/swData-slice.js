import { createSlice } from "@reduxjs/toolkit";

const swDataSlice = createSlice({
  name: "swData",
  initialState: {
    count: 1,
    results: [],
    customCharacters: [],
    isLoading: false,
    errorOccurred: false,
  },
  reducers: {
    addNewData(state, action) {
      state.results = [...state.results, action.payload];
      state.isLoading = false;
      state.errorOccurred = false;
    },
    deleteCharacter(state, action) {
      if (action.payload.fromDB)
        state.results[action.payload.pageNumberApi].results = state.results[
          action.payload.pageNumberApi
        ].results.filter((entry) => entry.name !== action.payload.characterID);
      else
        state.customCharacters = state.customCharacters.filter(
          (entry) => entry.id !== action.payload.characterID
        );
    },
    addCustomCharacter(state, action) {
      state.customCharacters = [
        ...state.customCharacters,
        { id: state.count, ...action.payload },
      ];
      state.count += 1;
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
