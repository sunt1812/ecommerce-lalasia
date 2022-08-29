import React from 'react'
import { useGlobalContext } from '../context/StateContext'
import Routers from '../router/Routers'
import { CartModal } from './cart'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  const {modalCart}= useGlobalContext()
  return (
    <div className="wrapper">
        <Header />
        {modalCart && <CartModal/>}
        <main className="main">
            <Routers />
        </main>
        <Footer />
    </div>
  )
}

export default Layout