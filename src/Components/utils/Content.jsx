import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Content = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Content