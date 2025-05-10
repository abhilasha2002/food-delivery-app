import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/createCart";

const Cart=()=>{
    //reading items from redux store- subscribing to store items
    const cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-lg">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-black text-white rounded-xs px-2 py-1 cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length===0 && <h1> Add items to cart!! <p>  Enjoy delicious food</p></h1>}
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
};
export default Cart;