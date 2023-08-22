import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: "users",
  initialState: {
    ...usersAdapter.getInitialState(),
    email:null,
  },
  reducers: {
    addUser:(state, action) =>  {
      usersAdapter.addOne(state, action.payload);
      state.email = action.payload.email
    },
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
