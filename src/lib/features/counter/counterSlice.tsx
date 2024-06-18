import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface counterState {
    items: number;
}

const initialState: counterState = {
    items: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // add: (state, action) => {
        //     // Magic
        //     // Immer will handle the mutation
        //     state.items(action.payload);
        // },
        increse:(state)=>{
           state.items +=1;
        },
        decrease:(state)=>{
           state.items -=1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increse,decrease } = counterSlice.actions;

export default counterSlice.reducer;