import React, { useEffect } from 'react'
 import { useState } from 'react';
 import './Product.css'
  import { useDispatch } from 'react-redux';
   import {add}  from  '../Redux/ReducerSlice'


const Product = () => {
    const dispatch = useDispatch();

    const[product,setProduct]=useState([]);
 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>{
          setProduct(data);
        })

    },[])



    



      
      const addProduct=(product)=>{
        dispatch(add(product))

        // console.log(cart);
    
      }


    //  const handler=((e)=>{
    //     e.preventDefault();

  return (
    <div >
   

      {
        product.length > 0 ? <div className='container'>{
             product.map((product)=>{
              return <div className='cardstyle'>
              <img src={product.image} alt='pro' width="100px" height="100px"/>
              <h3>{product.title}  </h3>
              <p>${product.price}</p>
               <br/><br/>
              <button onClick={()=>{
                 addProduct(product)
                 }}>ADD TO CART
              </button>
              </div>
             })
      }

      </div> : <h2 style={{color:"red",textAlign:"center",marginTop:"100px"}}>No Product to Display</h2>

      }
    </div>
  )
}

export default Product