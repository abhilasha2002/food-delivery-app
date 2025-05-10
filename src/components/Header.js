import { useState ,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [buttonName,setbuttonName]=useState('Login');
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext)
  
  //Subscribing to the store using a selector
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems,123);

  return (
    <div className="flex justify-between bg-pink-300 shadow-2xl mb-2 sm:bg-yellow-100 lm:bg-green-100">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center" >
        <ul  className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus? "🟢":"🔴"}</li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"><Link to='/about'>About us</Link></li>
          <li  className="px-4"><Link to='/contact-us'>Contact us</Link></li>
          <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length}items)</Link></li>
          <button className="login" onClick={()=>{
           buttonName==='Login'?setbuttonName('Logout'):setbuttonName('Login');
          }}>{buttonName}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
