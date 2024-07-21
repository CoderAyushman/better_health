import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counter/counterSlice';
import displayCounterReducer from './features/counter/displayCounterSlice';
import { loadState } from '@/app/components/localStorage';
// import dataReducer from './features/dataSlice';

export const makeStore = () => {
  return configureStore({
        reducer: {
          counter:counterReducer,
          diplayCounter:displayCounterReducer,
          
        },
        
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];