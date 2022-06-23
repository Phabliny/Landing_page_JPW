import React, { Component } from 'react'
import './css/style.css'
import './css/ourstrap.css'

export default class Header extends Component {
  render() {
    return (
      <header className="row m-0 p-0">
        <div className="col col-6 d-flex flex-column justify-content-center align-items-center py-lg-5 py-sm-3">
          <img className="col-sm-12 col-md-12" src="../img/logo_jpw.png"/>
          <h2 className="col-sm-12 col-md-11 pt-3 text-justify">PREÇO JUSTO COM ATENDIMENTO DIFERENCIADO EM FERRAGENS EM UBERLÂNDIA E REGIÃO?</h2>
          <a href='https://wa.me/5534984417989?text=Desejo%20fazer%20um%20orçamento' target="_blank" rel="noopener noreferrer"><img src='../img/zap.png' className='logozap'></img></a>
        </div>
      </header>
    )
  }
}