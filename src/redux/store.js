import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./useSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})