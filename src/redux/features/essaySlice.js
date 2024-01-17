import { createSlice } from "@reduxjs/toolkit";
// import { fetchEssayGrade } from "../api/api";

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
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEssayGrade.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchEssayGrade.fulfilled, (state, action) => {
//         state.loading = false;
//         state.grade = action.payload;
//       })
//       .addCase(fetchEssayGrade.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
});

export const { addEssay } = essaySlice.actions;

export const selectEssayGrade = (state) => state.essay.grade;

export default essaySlice.reducer;
