import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { Formik, Form, input, ErrorMessage } from "formik";
import * as yup from "yup";

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password minimum 8 characters")
        .required("Password is required")
});



const Cadastro = () => {

    const toastId = React.useRef(null)
    const [data, setData] = useState({})

    function createUser(user) {
        toastId.current = toast.loading("Enviando...")

        fetch(API_URL + "/user", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(user),
        })
            .then((res) => {
                if (res.status === 409) {
                    return toast.update(toastId.current, {
                        render: "Não Cadastrado :(",
                        type: "error",
                        isLoading: false,
                        closeButton: true,
                        autoClose: true
                    })
                }
                toast.update(toastId.current, {
                    render: "Cadastro Enviado com Sucesso!",
                    type: "success",
                    isLoading: false,
                    closeButton: true,
                    autoClose: true
                })
                //Limpar os campos
                document.getElementById('name').value = ''
                document.getElementById('last_name').value = ''
                document.getElementById('email').value = ''
                document.getElementById('password').value = ''
            }).catch((err) => {
                console.log(err)
                toast.update(toastId.current, {
                    render: "Cadastro não efetuado, erro de conexão! :(",
                    type: "error",
                    isLoading: false,
                    closeButton: true,
                    autoClose: 1200
                })
            })

    }


    const submit = (e) => {
        e.preventDefault()
        const res = window.confirm("Enviar Cadastro?")
        if (res == true) {
            createUser(data)    //Enviar e limpar os campos
        }
    }

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
        // console.log(data)
    }

    return (
        <div className="tela-box" style={{ height: '550px' }}>
            <h1 className="titulo_cadastro">SIGN UP</h1>
            <br /><br />

            <form onSubmit={submit} style={{ color: 'aliceblue' }} className="formulario">

                <div className="inputs_cadastro">
                    <label htmlFor="nome" className="labels_label--format"><strong>Nome:</strong></label>
                    <br />
                    <input type="text" name="nome" id="name" onChange={handleChange} className="input-cadastro" required />
                    <br />

                    <label htmlFor="sobrenome" className="labels_label--format"><strong>Sobrenome:</strong></label>
                    <br />
                    <input type="text" name="sobrenome" id="last_name" onChange={handleChange} className="input-cadastro" required />
                    <br />

                    <label htmlFor="email" className="labels_label--format"><strong>Email:</strong></label>
                    <br />
                    <input type="email" name="email" id="email" onChange={handleChange} className="input-cadastro" required />
                    <br />

                    <label htmlFor="password" className="labels_label--format"><strong>Senha:</strong></label>
                    <br />
                    <input type="password" name="password" id="password" onChange={handleChange} className="input-cadastro" required />
                    <br /><br />
                </div>

                <br /><br />

                <div className="create_account">
                    <Link to="/" title="Voltar para o menu anterior" className="button_submit button_bg transitionBg cadastro_link--submit">Voltar</Link>
                    <br />
                    <input type="submit" defaultValue="Criar Conta" className="button_submit button_bg transitionBg input_submit--criarConta" title="Ao clicar seus dados serão enviados" />
                </div>
            </form>
        </div>
    )
}

export default Cadastro