import { createSlice } from "@reduxjs/toolkit";

const createCart= createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});
export const {addItem,removeItem,clearCart} =createCart.actions;
export default createCart.reducer;