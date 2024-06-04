import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Используем именованный экспорт
import themeReducer from './reducers/themeReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/usersReducer';
import dataReducer from './slices/usersRatingSlice';
import shopReducer from './slices/shopSlice';
import profileCardReducer from './slices/profileCardSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  user: userReducer,
  data: dataReducer,
  shop: shopReducer,
  profileCard: profileCardReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER', 'persist/FLUSH'],
      },
    }).concat(thunk) // Добавляем `thunk` как middleware
});

const persistor = persistStore(store);

export { store, persistor };