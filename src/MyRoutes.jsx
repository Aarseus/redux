import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Counter from './Counter'
import Games from './Games'
import Cart from './pages/Cart'
import Homepage from './pages/Homepage'

const MyRoutes = () => {
  return (
    <>

  <Router>
    <Routes>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default MyRoutes
