import './Cart.css';
import { useSelector } from 'react-redux'
import {remove}  from  '../Redux/ReducerSlice'
import { useDispatch } from 'react-redux';



const Cart = () => {
  const { cart } = useSelector((select) => select.ReducerSlice)
  const dispatch = useDispatch();

    const removeCart=(ele)=>{
      dispatch(remove(ele))

    }
  
  
  return (
   <>
     <div className='product'>
      {cart.lenght>0 ? <h1>Data not Fetch</h1> 
      :
      cart.map((ele)=>{
        return<div key={ele.id} className="card">
          <img src={ele.image} alt="" />
          <h2>{ele.category}</h2>
          <p>Price: {ele.price} $</p>
          <span>Free delivery</span>
          <br/><br/>
          <button onClick={()=>{
            removeCart(ele.id)
          }}>Remove Cart</button>
        </div>

      })
    }

    </div>
   </>
  )
}

export default Cart