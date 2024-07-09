import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface displayCounterState {
    items: number;
}

const initialState: displayCounterState = {
    items: 1,
};

export const displayCounterSlice = createSlice({
    name: 'displayCounter',
    initialState,
    reducers: {
        // add: (state, action) => {
        //     // Magic
        //     // Immer will handle the mutation
        //     state.items(action.payload);
        // },
        increseDisplayCounter:(state)=>{
            state.items +=1;
        },
        decreaseDisplayCounter:(state)=>{
           state.items -=1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increseDisplayCounter,decreaseDisplayCounter } = displayCounterSlice.actions;

export default displayCounterSlice.reducer;