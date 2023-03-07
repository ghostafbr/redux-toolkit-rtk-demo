import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis';
import { counterSlice } from './slices/counter/counterSlice';
import { pokeSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokeSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
