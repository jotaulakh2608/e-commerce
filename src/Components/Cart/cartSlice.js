import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show:false,
    cart:[], 
    total:0
    
}


 const cartSlice = createSlice({
    
name:"cart",
initialState,
reducers:{
    showCart:(state)=>{
        state.show = !state.show
    },
    addTocart:(state, action)=>{
        const existingIndex = state.cart.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (existingIndex >= 0) {
            state.cart[existingIndex] = {
              ...state.cart[existingIndex],
              itemCount: state.cart[existingIndex].itemCount + 1,
              
            };

state.total= state.total += state.cart[existingIndex].price
            
          } else {
            let tempProductItem = { ...action.payload, itemCount: 1 };
            state.cart.push(tempProductItem);
            state.total= state.total += tempProductItem.price 
        }
    },
   decreaseItem(state, action){
    const itemIndex = state.cart.findIndex(p=>p.id ===action.payload.id)
    if (state.cart[itemIndex].itemCount>1) {
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          itemCount:  state.cart[itemIndex]= state.cart[itemIndex].itemCount - 1,
          
        } 
         state.total= state.total - state.cart[itemIndex].price
   } 
   else if(state.cart[itemIndex].itemCount===1){
       state.total= state.total - state.cart[itemIndex].price
    state.cart = state.cart.filter(product=>(product.id !== action.payload.id))
}},
    removeFromCart:(state, action)=>{
        state.cart = state.cart.filter(product=>(product.id !== action.payload.id))
    }
}

 })

 export const {showCart, addTocart, removeFromCart, decreaseItem} = cartSlice.actions

export default cartSlice.reducer