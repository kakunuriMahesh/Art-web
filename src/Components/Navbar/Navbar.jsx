import React, { useContext, useRef, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/down-chevron.png'

const Navbar = () =>{

    const {getTotalCartItems} = useContext(ShopContext)
    const[menu, setMenu] = useState('shop')
    const menuRef  =  useRef()

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Mahesh Sketch</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('painting')}}><Link style={{textDecoration: 'none'}} to='/painting'>Painting</Link> {menu==='painting'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('sketch')}}><Link style={{textDecoration: 'none'}} to='/sketch'>Sketch</Link> {menu==='sketch'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('drawing')}}><Link style={{textDecoration: 'none'}} to='/drawing'>Drawing</Link> {menu==='drawing'?<hr/>:<></>}</li>
                {/* <li></li> */}
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button>Login</button></Link>}
                
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar