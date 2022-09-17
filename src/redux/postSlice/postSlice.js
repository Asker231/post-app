import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:'post',
    initialState:{
        arr:[]
    },
    reducers:{
        addPost(state,action){
            state.arr.push(action.payload)
        },removePost(state,action){
            state.arr = state.arr.filter((el)=>el.id !== action.payload.id)
        }
    }
})
export const {addPost,removePost} = postSlice.actions;
export default postSlice.reducer;