import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import todoSlice from './todoSlice'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
// import { todoReducer, todoPersisReducer } from "./features/todo";
// import { persistStore } from "redux-persist";

const blackListedAction = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const reducers = combineReducers({
  todo: todoSlice,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...blackListedAction]
      }
    }),
});

const persiststor = persistStore(store);

export {store, persiststor}