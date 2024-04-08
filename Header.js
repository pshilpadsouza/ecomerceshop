import React from 'react'
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import "./Header.css";

function Header() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='header'>
<div className="header_logo">
           <StorefrontIcon classname="header_logoImage" fontsize="large"/>
      { /* <ShoppingBasketIcon classname="header_logoImage" fontsize="large"/>  */}
      <Link to="/" style={{textDecoration:"none"}}> 
      <h2 classname="header_logotitle">eshop</h2>
      </Link>
      </div>
      

      <div className="header_search">  
      <input type="text" classname="header_searchinput"/>
      <SearchIcon className="header_searchicon"/>
      </div>

      <div className="header_nav"> 
      <Link to="/login" style={{textDecoration:"none"}}>

      <div className="nav_item">
        <span className="nav_itemLineOne">Hello Guest</span>
        <span className="nav_itemLineTwo">sign In</span>
      </div>
      </Link>

      <div className="nav_item">
        <span className="nav_itemLineOne">your</span>
        <span className="nav_itemLineTwo">shop</span>
      </div>
      <Link to ='/Checkout' style={{textdecoration:'none'}}>
    <div className="nav_itembasket">
    <ShoppingBasketIcon  />   
    <span className="nav_itemLineTwo nav_basketcount">{basket.length}</span>
 </div>
 </Link>

    </div>
    </div>
  )
}

export default Header