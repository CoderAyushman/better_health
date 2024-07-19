import quizes from "@/app/components/Quizes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface displayCounterState {
  items: number;
}

const initialState: displayCounterState = {
  items: 0,
};

export const displayCounterSlice = createSlice({
  name: "displayCounter",
  initialState,
  reducers: {
    addDisplayCounter: (state, action) => {
        // Magic
        // Immer will handle the mutation
        state.items=action.payload;
    },
    increseDisplayCounter: (state) => {
      

        state.items += 1;
      
    },
    decreaseDisplayCounter: (state) => {
      
      if (state.items != 1) {
        state.items -= 1;
      }
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { increseDisplayCounter, decreaseDisplayCounter,addDisplayCounter } =
  displayCounterSlice.actions;

export default displayCounterSlice.reducer;
