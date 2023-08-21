import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addUser: usersAdapter.addOne,
    removeUser: usersAdapter.removeOne,
    updateUser: usersAdapter.updateOne,
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
} = usersSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users);

export const usersReducer = usersSlice.reducer;
