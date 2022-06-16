import React, { Component } from 'react'
import './css/style.css'
import './css/ourstrap.css'

export default class Header extends Component {
  render() {
    return (
      <header class="row">
        <div class="col col-6 d-flex flex-column justify-content-center align-items-center py-lg-5 py-sm-3">
          <img class="col-sm-12 col-md-8" src="../img/logo_jpw.png"/>
          <h2 class="col-sm-12 col-md-11 pt-3 text-justify">PREÇO JUSTO COM ATENDIMENTO DIFERENCIADO EM FERRAGENS EM UBERLÂNDIA E REGIÃO?</h2>
        </div>
      </header>
    )
  }
}