import { createSlice } from '@reduxjs/toolkit'

// redux toolkit : for client side 
const authSlice=createSlice({
    name:"auth",
    initialState:{isloggedin:false},
    reducers:{
        login:(state)=>{
            state.isloggedin=true
        },
        logout:(state)=>{
            state.isloggedin=false
        },
    }
})

// actions
export const  {login,logout}=authSlice.actions;
// reducer
export default authSlice.reducer