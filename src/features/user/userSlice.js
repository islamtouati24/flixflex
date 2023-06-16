import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    uID: null,
    name: "",
  },
  reducers: {
    logIn: (state, action) => {
      state.uID = action.payload.uID;
      state.name = action.payload.name;
    },
    logOut: (state) => {
      state.uID = null;
      state.name = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
