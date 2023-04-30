import { createSlice } from '@reduxjs/toolkit'

 
 
const cart = createSlice({
    name: 'cartData',
    initialState: {
        
        cart: []
    },

      
    reducers: {
        
        add (state, action)  {
            state.cart.push(action.payload)
            // console.log(action.payload);
        },
        remove (state, action) {
            // console.log(cart);
             state.cart=state.cart.filter(item=>item.id !== action.payload)
        }

    },
});
export const {add, remove } = cart.actions

export default cart.reducer