import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Header from "./components/pages/header";
import Footer from "./components/pages/Footer"
import productDetail from './components/pages/productDetails'
import Products from './components/pages/Products'
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Header/>

                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <productDetail />
        </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
