import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Counter from './Counter'

const MyRoutes = () => {
  return (
    <>

  <Router>
    <Routes>
        <Route path='/counter' element={<Counter/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default MyRoutes
