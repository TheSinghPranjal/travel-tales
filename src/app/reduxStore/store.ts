import { configureStore, Reducer } from '@reduxjs/toolkit';
import tripDetailsReducer from './dashboardRedux/dashboardSlice';
import storage from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import rootReducer from './rootReducer';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['tripDetails'],

// }

const store = configureStore({
    reducer: rootReducer
});

export default store
