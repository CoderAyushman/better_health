import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counter/counterSlice';
import displayCounterReducer from './features/counter/displayCounterSlice';
// import kgtolbsReducer from './features/counter/KgToLbsSlice';
// store variable is a global variable.
export const makeStore = () => {
    return configureStore({
        reducer: {
          counter:counterReducer,
          diplayCounter:displayCounterReducer
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];