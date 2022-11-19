import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import LayoutComponents from '../../components/LayoutComponents'
import { toast } from 'react-toastify'
import { Formik, useFormik } from "formik";
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';


const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

// **Validação Formulário
const validateStyle = {
    color: "red",
}

// const currentDate = new Date().toLocaleDateString()
const today = new Date().toLocaleDateString()

function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "dd/mm/yyyy", new Date());

    return parsedDate;
}
// **Validação Formulário

export const CadastroProduto = () => {

    const toastId = React.useRef(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            brand: '',
            post_date: '',
            address: '',
            price: '',
        },
        validationSchema: yup.object({
            name: yup.string()
                .max(30, '*No máximo 30 caracteres!')
                .required('*Obrigatório'),

            brand: yup.string()
                .max(20, '*No máximo 20 caracteres!'),

            post_date: yup.date()
                .transform(parseDateString)
                .max(today, `*Por favor, no máximo a data atual: ${today} `)
                .required('*Obrigatório').typeError("*Por favor coloque a data no formato dd/mm/aa"),

            address: yup.string()
                .max(75, 'No máximo 75 caracteres!')
                .required("*Obrigatório"),

            price: yup.number().max(1000, "*No máximo 4 dígitos (6 algarismos -> 1000.00)").required("*Obrigatório").typeError("*Por favor coloque um número Válido. No máximo 4 dígitos (6 algarismos -> 1000.00)"),

        }),
        onSubmit: values => {
            const res = window.confirm("Enviar os produtos inseridos?")
            if (res == true) {
                createProduct(values)
            }
            // console.log(values)
        },
    });

    function createProduct(product) {
        toastId.current = toast.loading("Adicionando...")
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
            }).catch((err) => {
                console.log(err)
                toast.update(toastId.current, {
                    render: "Produto não enviado, erro de conexão! :(",
                    type: "error",
                    isLoading: false,
                    closeButton: true,
                    autoClose: 1200
                })
            })
    }

    function resetar() {
        formik.resetForm()
        // alert("Os Campos do Formulário foram Resetados!")
        toast.success("Os campos do formulário foram resetados!")
    }

    return (
        <LayoutComponents>
            <form className="login-form" onSubmit={formik.handleSubmit}>
                <span className="login-form-title"> Adicionar Produto </span>
                <br />
                {/* <span className="login-form-title">
                        <img src={jpIMG} alt="Jovem Programador" />
                        </span> */}

                <div className="wrap-input">
                    <input
                        id="name"
                        name='name'
                        className={formik.values.name !== "" ? "has-val input" : "input"}
                        type="text"
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        required
                    />
                    <span className="focus-input" data-placeholder="Nome..."></span>
                    {formik.touched.name && formik.errors.name ? (
                        <div style={validateStyle}>{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="wrap-input">
                    <input
                        id="brand"
                        name='brand'
                        className={formik.values.brand !== "" ? "has-val input" : "input"}
                        type="text"
                        value={formik.values.brand}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <span className="focus-input" data-placeholder="Marca..."></span>
                    {formik.touched.brand && formik.errors.brand ? (
                        <div style={validateStyle}>{formik.errors.brand}</div>
                    ) : null}
                </div>

                <div className="wrap-input">
                    <input
                        id="post_date"
                        name='post_date'
                        className={formik.values.post_date !== "" ? "has-val input" : "input"}
                        type="text"
                        value={formik.values.post_date}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        required
                    />
                    <span className="focus-input" data-placeholder="Data..."></span>
                    {formik.touched.post_date && formik.errors.post_date ? (
                        <div style={validateStyle}>{formik.errors.post_date}</div>
                    ) : null}
                </div>

                <div className="wrap-input">
                    <input
                        id="address"
                        name='address'
                        className={formik.values.address !== "" ? "has-val input" : "input"}
                        type="text"
                        value={formik.values.address}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        required
                    />
                    <span className="focus-input" data-placeholder="Endereço..."></span>
                    {formik.touched.address && formik.errors.address ? (
                        <div style={validateStyle}>{formik.errors.address}</div>
                    ) : null}
                </div>

                <div className="wrap-input">
                    <input
                        id="price"
                        name='price'
                        className={formik.values.price !== "" ? "has-val input" : "input"}
                        type="text"
                        value={formik.values.price}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        required
                    />
                    <span className="focus-input" data-placeholder="Preço..."></span>
                    {formik.touched.price && formik.errors.price ? (
                        <div style={validateStyle}>{formik.errors.price}</div>
                    ) : null}
                </div>

                <div className="container-login-form-btn">
                    <button type='submit' className="login-form-btn button_submit">Enviar</button>
                </div>

                <div className="container-login-form-btn">
                    <button type='reset' className="login-form-btn button_submit" onClick={resetar} >Reset</button>
                </div>

            </form>

            <Link to="/Main" >
                <div className="container-login-form-btn">
                    <button type='button' className="login-form-btn button_submit">Voltar</button>
                </div>
            </Link>
        </LayoutComponents >
    )
}

export default CadastroProduto