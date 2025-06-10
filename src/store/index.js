import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./blogSllice"


export const store = configureStore({
    reducer: {
        blog: BlogReducer
    },
})