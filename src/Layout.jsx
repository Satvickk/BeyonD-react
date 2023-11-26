import React from 'react'
import Header from './Components/Header/Header'
import Footer from './components/Footer/Footer'
import Blog from './Components/Blog/Blog'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout