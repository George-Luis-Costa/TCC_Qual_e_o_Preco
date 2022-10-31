import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import './telaLogin.css'
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

    const searchData = async (title) => {
        const response = await fetch(`${API_URL}${title}`, { method: 'GET' })
        const data = await response.json()
        setAds(data)
        console.log(data)
    }
    useEffect(() => {
        searchData(`/product`)

    }, [])

    return (
        <div class="tela-box">
        <h1 class="titulo_login">Bem - Vindo</h1>
        <img
          class="imagem"
          src={images}
          alt="icon_person"
          width="64px"
          height="64px"
          />
        <br /><br />
        <section>
          <input
            class="input-login"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            required
            />
          <br /><br />
          <input
            class="input-login"
            id="senha"
            name="password"
            type="password"
            placeholder="Senha"
            required
            />
          <br /><br />
          <a href="./Screens/main.html">
            <button class="button button_default transitionBg">LOG IN</button>
          </a>
        </section>
        <footer class="footer_index--sign">
          <p>Não registrado?</p>
          <a href="./Screens/cadastro.html">
            <button class="button button_default button-signUp transitionBg">SIGN UP</button>
          </a>
        </footer>
      </div>
    )
}

export default TelaLogin