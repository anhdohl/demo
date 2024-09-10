import { createSlice } from "@reduxjs/toolkit";

export const LoadingStore = createSlice({
  name: "LoadingStore",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { setIsLoading } = LoadingStore.actions;

export default LoadingStore.reducer;
