import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MainPage from './pages/MainPage'
import ItemPage from './pages/ItemPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/product/:id' element={<ItemPage />} />
      </Routes>
    </Router>
  )
}

export default App