import { createSlice } from "@reduxjs/toolkit";

const essaySlice = createSlice({
  name: "essay",
  initialState: {
    grade: [],
    loading: false,
    error: null,
  },
  reducers: {
    addEssay: (state, action) => {
        state.grade.push({ ...action.payload })
    },
  },
});

export const { addEssay } = essaySlice.actions;

export const selectEssayGrade = (state) => state.essay.grade;

export default essaySlice.reducer;
