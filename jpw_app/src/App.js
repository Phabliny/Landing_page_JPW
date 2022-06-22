import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Login from './components/Login'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div> 
        <Login />
      </div>
      )
    }
}
