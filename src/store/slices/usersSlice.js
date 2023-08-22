// Ваш файл usersSlice.js
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: "users",
  initialState: {
    ...usersAdapter.getInitialState(),
    currentUser: null, 
  },
  reducers: {
    addUser: usersAdapter.addOne,
    removeUser: usersAdapter.removeOne,
    updateUser: usersAdapter.updateOne,
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload; 
    },
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
  setCurrentUser,
} = usersSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users);


export const selectCurrentUser = (state) => state.users.currentUser;

export const usersReducer = usersSlice.reducer;
