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
import { ContactList } from "../components/ContactList/ContactList";
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
 [contactsApi.reducerPath]: contactsApi.reducer,
})




// const store = createStore(rootReducer, composeWithDevTools())
const store = configureStore({
    reducer: rootReducer,
  middleware: getDefaultMiddleware =>
      
    getDefaultMiddleware(
      getDefaultMiddleware().concat(contactsApi.middleware),
      {
      
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
console.log(contactsApi)
export default store

export const persistor = persistStore(store)