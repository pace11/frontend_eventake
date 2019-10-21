import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Payment from './pages/Payment'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/event/:id" exact component={Detail} />
      <Route path="/payment" exact component={Payment} />
      <Route path="/about" exact component={About} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
    </BrowserRouter>
  )
}
