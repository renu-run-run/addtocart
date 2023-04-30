import React from 'react'
 import "./Nav.css";
 import {Link} from 'react-router-dom'
 import './Nav.css'
 import { useSelector } from 'react-redux'

    
 const Nav = () => {
    const { cart } = useSelector((select) => select.ReducerSlice)

  return (
    <div className='nav'>
         <div id='title'>
            <h2>React Redux</h2>
         </div>
         <div id='menu'>
            <Link to="/">Home</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Cart">Cart</Link>



         </div>
         <div className='add'>  <Link to={'/Cart'}>
        <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-style-260nw-1558548761.jpg" alt='pro' style={{width:"30px",marginTop:"10px"}}/>
       { <span>{cart.length}</span>}
        </Link>
        </div>

    </div>
  )
}
export default Nav;