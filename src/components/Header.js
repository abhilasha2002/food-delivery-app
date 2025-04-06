import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router';

export const Header = () => {
  const [buttonName,setbuttonName]=useState('Login');
  // const handleButtonClick=()=>{
  //   let flag=false;
  //   if()
  // }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/contact-us'>Contact us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
           buttonName==='Login'?setbuttonName('Logout'):setbuttonName('Login');
          }}>{buttonName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
