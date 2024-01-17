import { configureStore } from "@reduxjs/toolkit";
import essayReducer from "./features/essaySlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    essay: essayReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
