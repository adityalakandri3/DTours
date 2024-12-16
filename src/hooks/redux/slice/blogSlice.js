import { createSlice } from "@reduxjs/toolkit";

const blogSlice  = createSlice({
    name:'blogSlice',
    initialState:{
        searchTerm:'',
        blogs:[]
    },
    reducers:{
        setSearchTerm : (state,action)=>{
            state.searchTerm = action.payload;
        }
    }
})

export const {setSearchTerm} = blogSlice.actions;

export default blogSlice.reducer;