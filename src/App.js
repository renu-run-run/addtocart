import React from 'react';

  import  "./App.css";
   import Nav from './Component/Nav';
  import Home from './Component/Home';
  import {Routes,Route} from 'react-router-dom'
  import Product from './Component/Product';
  import Cart from './Component/Cart';
  
const App = () => {
  return (
    <div  className='App'>
        <Nav/>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="*" element={<Home/>}/>
    </Routes>
        


    
       


      </div>

  )
}

export default App