import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import '../tela_main/telaMain.css'
import { FcAdvance, FcSearch } from 'react-icons/fc'
import { MdAddComment, MdOutlineAddTask, MdOutlineAddCircle } from 'react-icons/md'

//imagens
//import SearchIcon from '../../assets/search.svg'
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

  const [info, setInfo] = useState([])

  useEffect(() => {

    fetch(API_URL + "/product/info", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className="tela-box" style={{ height: '675px' }}>

      <header style={{ color: 'aliceblue' }}>
        <h1 className='h1' style={{ fontSize: "40px" }}>Qual é o Preço?</h1>

        <figure>
          <Link to={"/"}>
            <div className='hover-image'>
              <img className='img' src={perfil} alt="Perfil" title='Voltar para a tela de Login' width="70px" height="70px" />
              <span className="texto">Sair</span>
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

            <Link to="/Dia">
              <button className="buttonMain transitionBg ">
                Visualizar
              </button>
            </Link>
          </div>

          <div className="section__div__view" style={{ marginBottom: '10px' }}>
            <div className="section__view--align">
              <h1 className="section__access__h1">Markets e mais</h1>
              <h2 className="section__access__h2">Promoção Semanal</h2>
            </div>

            <Link to="/Semana">
              <button className="buttonMain transitionBg">
                Visualizar
              </button>
            </Link>
          </div>

          <div className="section__div__view">
            <div className="section__view--align">
              <h1>Pesquisar Anúncios</h1>
            </div>

            <div className="round">
              <Link to="/Search">
                {/* <img alt="entrar" className="section__img--align" src={entrar} /> */}
                <div className='buttonMain transitionBg' style={{ display: "flex", justifyContent: "center" }}>
                  < FcSearch size={28} />
                </div>
              </Link>
            </div>
          </div>

          <br />

          <div className="section__div__view">
            <div className="section__view--align">
              <h1>Adicionar Anúncios</h1>
            </div>

            <div className="round">
              <Link to="/CadastroProdutos">
                {/* <img alt="entrar" className="section__img--align" src={entrar} /> */}
                <div className='buttonMain transitionBg' style={{ display: "flex", justifyContent: "center" }}>
                  < MdAddComment size={28} />++
                </div>
              </Link>
            </div>
          </div> <br />
        </div>

        <br />

        <div className="section__div__information">
          <div className="section__information--align-header">
            <img src={Totais} alt="total" width="30px" height="30px" />
            <h1>Números de Anúncios totais</h1>
            <Link to={'/Dia'}>
              <h2 className='buttonInfo transitionBg' style={{ fontSize: "30px", display: "flex", justifyContent: "center" }}>{info.total}</h2>
            </Link>
          </div>

          <br />
          <div className="section__information--align">
            <div>
              <img className="section__information__img" src={brilho} alt="img" width="30px" height="30px" />
              <h1>Do Dia</h1>
              <h2 className="section__information__img--align ">{info.today}</h2>
            </div>

            <div>
              <img className="section__information__img" src={semana} alt="img" width="30px" height="30px" />
              <h1>Da Semana</h1>
              <h2 className="section__information__img--align">{info.week}</h2>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default TelaMain