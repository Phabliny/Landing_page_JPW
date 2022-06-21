import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Login from './components/Login'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Main />
        <Footer /> */}
        <Login />
      </div>
    )
  }
}
