import { createSlice } from "@reduxjs/toolkit"
import { productsData } from "./productsData"

const initialState = {
    items:productsData,

}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
    
    }
})

export default productSlice.reducer