import {radioValues} from '@/app/components/RadioValues';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface dataState {
    items:any

}

let initialState: dataState = {
    items: radioValues
   
};

export const dataSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        update: (state, action) => {
            // Magic
            // Immer will handle the mutation
            state.items=action.payload;
        }
        
       
    },
});

// Action creators are generated for each case reducer function
export const {update } = dataSlice.actions;

export default dataSlice.reducer;