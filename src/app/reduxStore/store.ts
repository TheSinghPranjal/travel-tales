import { configureStore } from '@reduxjs/toolkit';
import tripDetailsReducer from './dashboardRedux/dashboardReducer';

const travelTalesStore = configureStore({
    reducer: {
        // tripDetails: tripDetailsReducer, 
    }
});

// Export types for use in your components
export type RootState = ReturnType<typeof travelTalesStore.getState>;
export type AppDispatch = typeof travelTalesStore.dispatch;

export default travelTalesStore;
