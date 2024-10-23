import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/home.jsx'
import Cart from './Components/Cart/cart.jsx';
import { CartProvider } from '/src/Components/CartContext/cartcontext.jsx';
import SignInForm from '/src/Components/SignInPage/Signinpage.jsx';
import MyOrders from './Components/MyOrders/myorders.jsx';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<SignInForm />}/>
        <Route path='/cart' element = {<Cart />}/>
        <Route path='/Home' element = {<Home />}/>
        <Route path='/myorder' element = {<MyOrders />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
