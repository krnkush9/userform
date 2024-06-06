import { configureStore } from "@reduxjs/toolkit";
import { formDataSlice } from "./Slices/formData";

// creating globaly store
export const Store = configureStore({
    reducer:{
        userInputValue:formDataSlice.reducer
    }
})