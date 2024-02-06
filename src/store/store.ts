//<reference types="redux-persist" />

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from "./reducers/auth_reducer"
import { cartReducer } from "./reducers/cart_reducer"
import { dataReducer } from "./reducers/data_reducer"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

 
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  data: dataReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  },
  })
})

export const persistor = persistStore(store);

export type AppRootStoreType = ReturnType<typeof rootReducer>

export default store;
