import { createSlice } from "@reduxjs/toolkit";

// slice creation
export const formDataSlice = createSlice({
    name: "userInputValue",
    initialState: [],
    reducers: {
        // addData method
        addData(state, action) {
            // store the value in the global store
            state.push(action.payload);
        },
        // updateData method
        updateData(state, action) {
            // empty to the global store
            return state.filter(currData => currData === action.payload);
        }
    }
})

export const { addData, updateData } = formDataSlice.actions;
export default formDataSlice.reducer;