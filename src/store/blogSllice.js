import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    showScrollTop: false,
    theme: localStorage.getItem('theme') ?? "light",
    selectedCategory: 0
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
        }
    },
})
export const {setShowScrollTop, setTheme, setSelectedCategory} = blogSlice.actions
export default blogSlice.reducer