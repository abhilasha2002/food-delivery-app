import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './createCart';
const appStore= configureStore({
    reducer:{
        cart:cartReducer
    }
});
 export default appStore;