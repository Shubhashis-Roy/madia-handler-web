"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

// ---------------------------
// Store
// ---------------------------
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// ---------------------------
// Types
// ---------------------------
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ---------------------------
// Typed Hooks
// ---------------------------
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
