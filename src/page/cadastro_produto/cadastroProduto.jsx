import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import LayoutComponents from '../../components/LayoutComponents'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

const schema = yup.object().shape({
    name: yup.string().max(45, "Tamanho máximo de 45 caracteres ").required(),
    marca: yup.string().max(20, "Tamanho máximo de 20 caracteres "),
    data: yup.date().required(),
    endereco: yup.string().max(45, "Tamanho máximo de 45 caracteres ").required(),
    preco: yup.number().max(8, "Tamanho máximo de 8 números ").required()
})

export const CadastroProduto = () => {

    const toastId = React.useRef(null)

    const [name, setName] = useState("");
    const [marca, setMarca] = useState("");
    const [data, setData] = useState("");
    const [endereco, setEndereco] = useState("");
    const [preco, setPreco] = useState("");

    function createProduct(product) {
        toastId.current = toast.loading("Buscando...")
        fetch(API_URL + "/product", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                toast.update(toastId.current, {
                    render: "Produto Enviado!",
                    type: "success",
                    isLoading: false,
                    closeButton: true,
                    autoClose: true
                })
                // alert("Produto Enviado!")
                // toast.success("Produto Enviado!")
            })
    }

    function resetar() {
        setName("")
        setMarca("")
        setData("")
        setEndereco("")
        setPreco("")
        // alert("Os Campos do Formulário foram Resetados!")
        toast.success("Os campos do formulário foram resetados!")
    }

    const submit = (e) => {
        const product = {
            "name": name,
            "brand": marca,
            "price": preco,
            "address": endereco,
            "post_date": data,
        }
        e.preventDefault()
        // createProduct(product)
        setName("")
        setMarca("")
        setPreco("")
    }
    /* onSubmit={submit} */
    return (
        <LayoutComponents>

            <Formik
                validationSchema={schema}
                onSubmit={submit}
                validateOnMount
                initialValues={{
                    name,
                    marca,
                    data,
                    endereco,
                    preco
                }}
            >
                {({ values, isValid }) => (
                    < Form className="login-form">
                        <span className="login-form-title"> Adicionar Produto </span>
                        <br />
                        {/* <span className="login-form-title">
                        <img src={jpIMG} alt="Jovem Programador" />
                        </span> */}

                        <div className="wrap-input">
                            <Field
                                required
                                name='name'
                                className={name !== "" ? "has-val input" : "input"}
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <ErrorMessage name="name" />
                            <span className="focus-input" data-placeholder="Nome..."></span>
                        </div>

                        <div className="wrap-input">
                            <Field
                                name='marca'
                                className={marca !== "" ? "has-val input" : "input"}
                                type="text"
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                            />
                            <ErrorMessage name="marca" />
                            <span className="focus-input" data-placeholder="Marca... (opcional)"></span>
                        </div>

                        <div className="wrap-input">
                            <Field
                                required
                                name='data'
                                className={data !== "" ? "has-val input" : "input"}
                                type="text"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                            <ErrorMessage name="data" />
                            <span className="focus-input" data-placeholder="Data..."></span>
                        </div>

                        <div className="wrap-input">
                            <Field
                                required
                                name='endereco'
                                className={endereco !== "" ? "has-val input" : "input"}
                                type="text"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                            <ErrorMessage name="endereco" />
                            <span className="focus-input" data-placeholder="Endereço..."></span>
                        </div>

                        <div className="wrap-input">
                            <Field
                                required
                                name='preco'
                                className={preco !== "" ? "has-val input" : "input"}
                                type="text"
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                            />
                            <ErrorMessage name="preco" />
                            <span className="focus-input" data-placeholder="Preço..."></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button type='submit' disabled={!isValid} className="login-form-btn button_submit">Enviar</button>
                        </div>

                        <Link to="/Main" >
                            <div className="container-login-form-btn">
                                <button type='button' className="login-form-btn button_submit">Voltar</button>
                            </div>
                        </Link>

                        <div className="login-form-btn">
                            <button type='button' className="login-form-btn button_submit" onClick={resetar}>Reset</button>
                        </div>
                    </Form>

                )}
            </Formik>
        </LayoutComponents >
    )
}

export default CadastroProduto