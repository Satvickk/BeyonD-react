import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'


function Layout() {
  return (
    <>
    <Header />

    <Outlet />    {/* outlet beech me dene se hum header aur footer ko same rakhte hue outlet ki jagah alag alag component insert kr sakte hai */}
    
    <Footer />
    </>
  )
}

export default Layout
