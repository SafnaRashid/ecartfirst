import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartItem",
    initialState:[],
    reducers:{
        //action-name:reducer function
        addToCart:(state,actionByComponent)=>{
            const existingProduct=state.find(item=>item.id==actionByComponent.payload)
            if(existingProduct){

            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }
        }
    }
})