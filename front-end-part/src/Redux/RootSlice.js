// RootSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  portfolioData: null,
  reloadData: false,
};

const RootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    ShowLoading: (state) => {
      state.loading = true;
    },
    HideLoading: (state) => {
      state.loading = false;
    },
    SetPortfolioData: (state, action) => {
      console.log("Updating portfolio data in Redux", action.payload);
      state.portfolioData = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
  },
});

export const { ShowLoading, HideLoading, SetPortfolioData, ReloadData } =
  RootSlice.actions;
export default RootSlice.reducer;
