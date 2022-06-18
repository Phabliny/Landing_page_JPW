import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import NovoCliente from "../components/NovoCliente";

export default class Section_formulario extends Component {
    render() {
        return (
            <div class="container py-5">
                <div class="row justify-content-center align-items-center py-4">
                    <h1>POSSO TE AJUDAR?</h1>
                    <h2>(ENTRE EM CONTATO CONOSCO PARA FAZERMOS UM ORÇAMENTO)</h2>
                    <div class="d-flex flex-collumn justify-content-center align-items-center flex-wrap col-lg-10 mt-3">
                        <BrowserRouter>  
                            <Routes>
                                <Route  to="/novo" path="novo" element={<NovoCliente />}/>
                            </Routes>
                        </BrowserRouter>
                        </div>
                </div>
            </div>
        );
    }
}