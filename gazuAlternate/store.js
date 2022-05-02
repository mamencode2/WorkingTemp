import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import authSlice from './redux/authSlice'

import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  
  userAuth: authSlice
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
  reducer: persistedReducer,
  
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;

