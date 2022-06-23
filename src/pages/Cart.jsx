import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'

const Cart = () => {
  const cartStore=useSelector(store=>store.cartStore)
  const cart_items=cartStore.cart_items

const dispatch=useDispatch
  const removeFromCart=(item)=>{
    dispatch({
      type:"REMOVE_FROM_CART",
      payload:item
    })
  }
  return (
    <>
      <Navbar/>
      <div className="container">

        {
          cart_items.length>0 ?
          <table className="table table-hover align-middle table-bordered">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product Image</th>
              <th>Product Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart_items.map((item,i)=>{
              return <tr key={i}>
                <td>{i+1}</td>
                <td>
                  <img src={item.image} alt={item.name} height='150px' />
                </td>
                <td>
                  <h4>{item.name}</h4>
                  <h5>{item.price}</h5>
                  <p>{item.descrption}</p>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={()=>removeFromCart(item)}>Remove</button>
                </td>
              </tr>
            })}
            <tr>
              <td colSpan={4}>
                <button className="btn btn-danger" onClick={()=>{
                  return dispatch({type:"CLEAR_CART"})}}>Empty Cart</button>
              </td>
            </tr>
          </tbody>
        </table>
        :
        <div className="alert alert-danger">There are no items in the cart</div>
        }
        

      </div>
    </>
  )
}

export default Cart
