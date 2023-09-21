import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"user",
    initialState:{
        email: '',
    },
    reducers:{
        login:(state,action)=>{
            state.email=action.payload.user.email;
        },
        logout:(state)=>{
            state.user=null;
        }
    }
})
export const {login,logout}=userSlice.actions;

export const selectUser=(state)=>state.user.user;

export default userSlice.reducer;