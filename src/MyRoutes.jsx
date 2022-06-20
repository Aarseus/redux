import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Counter from './Counter'
import Games from './Games'

const MyRoutes = () => {
  return (
    <>

  <Router>
    <Routes>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/games' element={<Games/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default MyRoutes
