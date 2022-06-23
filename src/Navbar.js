import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const cartStore=useSelector(store=>store.cartStore)
  const cart_items=cartStore.cart_items
  const no_of_items_in_cart=cart_items.length
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Our Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className='nav-item'>
          <Link className="nav-link" to={'/'}>
            No. of items in cart:{no_of_items_in_cart}
          </Link>
          
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navbar
