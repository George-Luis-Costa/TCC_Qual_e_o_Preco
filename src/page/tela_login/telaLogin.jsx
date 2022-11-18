import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom"
import '../../styles/telaLogin.css'
import images from '../../images/icon_login.png'
import { toast } from 'react-toastify'

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`


export const auth = (props) => {
  // console.log("props:", props)
  if (props == '202') {
    return true
  }
  else {
    return false
  };
};

const TelaLogin = () => {

  const [data, setData] = useState({})
  const [valid, setValid] = useState(false)

  const toastId = React.useRef(null)

  function authUser(user) {

    toastId.current = toast.loading("Logando...")
    toast.update(toastId.current, {
      closeButton: true,
    })

    fetch(API_URL + "/user", {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + window.btoa((encodeURI(`${user.email}:${user.password}`))),
      },
    })
      .then((res) => {
        if (res.status == '202') {
          setValid(auth(res.status))

          toast.update(toastId.current, {
            render: "Logado com sucesso!",
            type: "success",
            isLoading: false,
            closeButton: true,
            autoClose: 3000,
          })
          return res.json()
        } else {

          toast.update(toastId.current, {
            render: "Campo email ou senha estão incorretos",
            type: "error",
            isLoading: false,
            closeButton: true,
            autoClose: 3000
          })
          return new Error(res.status)
        }
      })
      .then((data) => {
        // console.log(data)

      }).catch(
        (err) => {
          console.log(err)
          toast.update(toastId.current, {
            render: "Erro de conexão! :(",
            type: "error",
            isLoading: false,
            closeButton: true,
            autoClose: 3000,
          })
          alert("Por favor tente novamente!")
        }
      )
  }

  const submit = (e) => {
    e.preventDefault()
    authUser(data)
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  return (
    <div className="tela-box" style={{ color: "aliceblue" }}>
      <h1 className="titulo_login">Bem - Vindo</h1>
      <img
        className="img"
        src={images}
        alt="icon_person"
        width="64px"
        height="64px"
      />
      <br /><br />
      <form onSubmit={submit} >
        <input
          className="input-login"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br /><br />
        <input
          className="input-login"
          id="senha"
          name="password"
          type="password"
          placeholder="Senha"
          required
          onChange={handleChange}
        />
        <br /><br />

        <button className="button button_default transitionBg">LOG IN</button>

      </form>

      {valid && (<Navigate to="/Main" />)}

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