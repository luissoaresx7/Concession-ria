import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Rod from '../../assets/rod.jpeg';
import Lud from '../../assets/lu.jpeg';
import Wes from '../../assets/Wes.jpg';
import './Equipe.css';

export default function Equipe() {
  return (
    <div className='divisao'>
      <Header/>
        <div className="corpo">
          <div className="corpo-card">
            <div className="card">
              <img className='fotos' src={Rod} alt="Avatar"/>
              <div className="container"></div>
              <h4><b>Rodrigo Carlos</b></h4> 
              <p>Co-facilitador</p> 
            </div>
            <div className="card"> 
              <img className='fotos' src={Lud} alt="Avatar"/>
              <div className="container"></div>
              <h4><b>Luis Roberto</b></h4> 
              <p>Colaborador</p> 
            </div>
            <div className="card"> 
              <img className='fotos' src={Wes} alt="Avatar"/>
              <div className="container"></div>
              <h4><b>Wesley da Silva</b></h4> 
              <p>Gestor de Conhecimento</p> 
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}