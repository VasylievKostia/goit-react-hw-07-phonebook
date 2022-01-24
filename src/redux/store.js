import { combineReducers } from "redux";
import { configureStore, } from "@reduxjs/toolkit";
import PhonebookReducer from "./Phonebook/Phonebook-reducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { contactsApi } from "./contacts/contactsSlice";

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter']
}

const persistedPhonebookReduser = persistReducer( persistConfig, PhonebookReducer)

const rootReducer = combineReducers({
  phonebook: persistedPhonebookReduser,
})

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    rootReducer
  },
  middleware: getDefaultMiddleware =>
      
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware)
})

export default store

export const persistor = persistStore(store)