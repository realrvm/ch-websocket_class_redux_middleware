import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Socket } from "../../../src/utils/socket";
import { socketMiddleware } from "./middleware";

// import {rooReducer} from './rootReducer'

export const store = configureStore({
  reducer: {},
  middleware: [socketMiddleware(new Socket()), ...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
