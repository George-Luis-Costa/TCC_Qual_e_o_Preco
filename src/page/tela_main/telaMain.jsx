import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from '../../components/Card'
import '../tela_main/telaMain.css'

//imagens
import SearchIcon from '../../assets/search.svg'
import perfil from '../../images/perfil.png'
import entrar from '../../images/entrar.png'
import Totais from '../../images/Totais.png'
import brilho from '../../images/brilho-do-sol.png'
import semana from '../../images/semana.png'

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

// const obj = {
//     name: "Gasolina (L)",
//     brand: "Petrobras",
//     price: "4,70",
//     post_date: "27/09/22"
// }

const TelaMain = () => {

  return (
    <div className="tela-box" style={{ height: '600px' }}>

      <header style={{ color: 'aliceblue' }}>
        <h1>Bem - Vindo</h1>
        
        <figure>
          <Link to={"/"}>
            <div className='hover-image'>
              <img className='img' src={perfil} alt="Perfil" title='Voltar para a tela de Login' width="70px" height="70px" />
              <span class="texto">Voltar ao Login</span>
            </div>
          </Link>
        </figure>
      </header>

      <br />

      <section className="conteiner_sources">

        <div className="section__div__access" style={{ color: 'aliceblue' }}>

          <div className="section__div__view">

            <div className="section__view--align">
              <h1 className="section__access__h1">Markets e mais</h1>
              <h2 className="section__access__h2">Promoção do dia</h2>
            </div>
            <button className="section__view__button">
              <Link to="/Dia">visualizar</Link>
            </button>
          </div>

          <div className="section__div__view" style={{ marginBottom: '10px' }}>
            <div className="section__view--align">
              <h1 className="section__access__h1">Markets e mais</h1>
              <h2 className="section__access__h2">Promoção do semanal</h2>
            </div>
            <button className="section__view__button">
              <Link to="/Semana">visualizar</Link>
            </button>
          </div>

          <div className="section__div__view">
            <div className="section__view--align">
              <h1>Pesquisar Anúncios</h1>
            </div>
            <div className="round">
              <Link to="/Search">
                <img className="section__img--align" src={entrar} />
              </Link>
            </div>
          </div>

          <div className="section__div__view" style={{ margin: 0 }}>
            <div className="section__view--align">
              <h1>Adicionar Anúncios</h1>
            </div>
            <div className="round">
              <Link to="/CadastroProdutos">
                <img className="section__img--align" src={entrar} />
              </Link>
            </div>
          </div>
        </div>

        <br />

        <div className="section__div__information">
          <div className="section__information--align-header">
            <img src={Totais} alt="total" width="30px" height="30px" />
            <h1>Números de Anúncios totais</h1>
            <h2>XXXX</h2>
          </div>

          <br />
          <div className="section__information--align">
            <div>
              <img className="section__information__img" src={brilho} alt="img" width="30px" height="30px" />
              <h1>Do Dia</h1>
              <h2 className="section__information__img--align" style={{ transform: 'translate(-45%)' }}>XXXX</h2>
            </div>

            <div>
              <img className="section__information__img" src={semana} alt="img" width="30px" height="30px" />
              <h1>Da Semana</h1>
              <h2 className="section__information__img--align">XXXX</h2>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default TelaMain