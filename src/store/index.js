import { configureStore, createSlice } from "@reduxjs/toolkit";

let studentSlice = createSlice({
  name: "student",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      return (state = action.payload);
    },
  },
});

const studentStore = configureStore({
  reducer: {
    student: studentSlice.reducer,
  },
});

export default studentStore;

export const studentActions = studentSlice.actions;
