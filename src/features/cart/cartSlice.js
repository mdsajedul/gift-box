import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart : [],
    boxCart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const inCart = state.cart.find((item)=>item._id === action.payload._id)
            if(inCart){
                inCart.quantity++;
            }else{
                state.cart.push({...action.payload, quantity:1})
            }
        },
        
        removeAllFromCart: (state)=>{
            state.cart = [];
        },
        addGiftBox: (state,action)=>{
            state.boxCart =[];
            state.boxCart.push({...action.payload, quantity:1})
        }
    }
})

export default cartSlice.reducer;

export const {addToCart,removeAllFromCart,addGiftBox} = cartSlice.actions