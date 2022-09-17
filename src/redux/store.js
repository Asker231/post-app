import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice/postSlice";
import userSlice from "./userSlice/userSlice";


const store = configureStore({
    reducer:{
            users:userSlice,
            posts:postSlice,
    }

    
})
export default store;