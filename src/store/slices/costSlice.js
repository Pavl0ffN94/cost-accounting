import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const costsAdapter = createEntityAdapter();

const costsSlice = createSlice({
  name: "costs",
  initialState: costsAdapter.getInitialState(),
  reducers: {
    addCost: costsAdapter.addOne,
    removeCost: costsAdapter.removeOne,
    updateCost: costsAdapter.updateOne,
  },
});

export const {
  addCost,
  removeCost,
  updateCost,
} = costsSlice.actions;

export const {
  selectAll: selectAllCosts,
  selectById: selectCostById,
} = costsAdapter.getSelectors((state) => state.costs);

export const costsReducer = costsSlice.reducer;
