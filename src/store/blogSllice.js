import { createSlice } from "@reduxjs/toolkit"
import { fetchCategories } from "../utils"


const initialState = {
    showScrollTop: false,
    theme: localStorage.getItem('theme') ?? "light",
    categories: await fetchCategories(),
    selectedCategory: localStorage.getItem('selectedCategory') || 0
}

export const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{
        setShowScrollTop: (state, action) => {
            state.showScrollTop = action.payload
        },
        setTheme: (state,action) => {
            state.theme = action.payload
            localStorage.setItem('theme',action.payload)
        },
        setSelectedCategory: (state,action) => {
            state.selectedCategory = action.payload
            localStorage.setItem('selectedCategory',action.payload)
        },
        setCategoies: (state,action) => {
            state.categories = action.payload
        }
    },
})
export const {setShowScrollTop, setTheme, setSelectedCategory, setCategoies} = blogSlice.actions
export default blogSlice.reducer