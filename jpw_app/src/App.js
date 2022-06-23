import React, { Component } from 'react'
import Login from './components/Login'
import Body from './Body'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div> 
        <Router>
            <Routes>
              <Route path="/token" element={<Login/>}></Route>
              <Route path="/" element={<Body/>}></Route>
            </Routes>
        </Router>
        
      </div>
      )
    }
}
