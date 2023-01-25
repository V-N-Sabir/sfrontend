import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    itemsCart: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      addProductBasket(state, action) {          
            const findItem = state.items.find((obj) => 
                obj.id === action.payload.id
            )
            if(findItem){
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                }) 
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },

        removeItems(state, action){      
            state.items = state.items.filter(obj => 
               obj.id !== action.payload.id
             )
             state.totalPrice = state.totalPrice -  (action.payload.price * action.payload.count)   
 
         },
  
         minusItem(state, action){
            const findItem = state.items.find((obj) => 
            obj.id === action.payload.id
            )
            if(findItem){
                findItem.count--
               state.totalPrice = state.totalPrice - findItem.price
            }
         },
         clearItems(state){
                state.items = []
                state.totalPrice = 0           
        },
      
      
}})

export const selectCart = (state) => state.basket

export const {  addProductBasket, minusItem, removeItems, clearItems} = cartSlice.actions

export default cartSlice.reducer 