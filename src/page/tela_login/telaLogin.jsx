import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from '../../components/Card'
import '../tela_login/telaLogin.css'
import SearchIcon from '../../assets/search.svg'
import images from '../../images/icon_login.png'

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

// const obj = {
//     name: "Gasolina (L)",
//     brand: "Petrobras",
//     price: "4,70",
//     post_date: "27/09/22"
// }

const TelaLogin = () => {

  const [ads, setAds] = useState([])
  const [buscaTermo, setBuscaTermo] = useState([])

  // const searchData = async (title) => {
  //   const response = await fetch(`${API_URL}${title}`, { method: 'GET' })
  //   const data = await response.json()
  //   setAds(data)
  //   console.log(data)
  // }
  // useEffect(() => {
  //   searchData(`/product`)

  // }, [])

  return (
    <div className="tela-box" style={{color: "aliceblue"}}>
      <h1 className="titulo_login">Bem - Vindo</h1>
      <img
        className="img"
        src={images}
        alt="icon_person"
        width="64px"
        height="64px"
      />
      <br /><br />
      <section>
        <input
          className="input-login"
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          required
        />
        <br /><br />
        <input
          className="input-login"
          id="senha"
          name="password"
          type="password"
          placeholder="Senha"
          required
        />
        <br /><br />
        <Link to="/Main">
          <button className="button button_default transitionBg">LOG IN</button>
        </Link>
      </section>
      <footer className="footer_index--sign">
        <p className='footerP'>Não registrado?</p>
        <Link to="CadastroUsers">
          <button className="button button_default button-signUp transitionBg">SIGN UP</button>
        </Link>
      </footer>
    </div>
  )
}

export default TelaLogin