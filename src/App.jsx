import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import HeaderNavbar from './components/HeaderNavbar'

const App = () => {
  return (
    <div>
      <Header />
      <HeaderNavbar />
      <Outlet />
    </div>
  )
}

export default App