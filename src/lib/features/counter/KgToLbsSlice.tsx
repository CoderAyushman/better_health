import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface KgToLbsState {
    items:any[];
}

const initialState: KgToLbsState = {
    items: [0,0],
};

export const KgToLbsSlice = createSlice({
    name: 'kgtolbs',
    initialState,
    reducers: {
        // add: (state, action) => {
        //     // Magic
        //     // Immer will handle the mutation
        //     state.items(action.payload);
        // },
        kgtolbs:(state,action)=>{
            state.items[0]=action.payload;
        },
        lbstokg:(state,action)=>{
           state.items[1]=action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { lbstokg,kgtolbs } = KgToLbsSlice.actions;

export default KgToLbsSlice.reducer;