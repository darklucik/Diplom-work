import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { matchApi } from "./API/matchApi";
import { countriesApi } from "./API/countriesApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [matchApi.reducerPath]: matchApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      matchApi.middleware,
      countriesApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
