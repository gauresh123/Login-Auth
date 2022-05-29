import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:[],
    value1:[],
}

export const registerSlice = createSlice({
    name:"register",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload);
        },
        add1:(state,action)=>{
            state.value1.push(action.payload);
        },
    }
})

export const {add,add1} = registerSlice.actions

export default registerSlice.reducer;