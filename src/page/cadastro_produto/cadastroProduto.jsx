import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import LayoutComponents from '../../components/LayoutComponents'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as yup from 'yup';

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

export const CadastroProduto = () => {

    const toastId = React.useRef(null)

    // const [name, setName] = useState("");
    // const [marca, setMarca] = useState("");
    // const [data, setData] = useState("");
    // const [endereco, setEndereco] = useState("");
    // const [preco, setPreco] = useState("");

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
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            brand: yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            //data: yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          console.log(values)
          createProduct(values)
        },
      });

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

    // function resetar() {
    //     setName("")
    //     setMarca("")
    //     setData("")
    //     setEndereco("")
    //     setPreco("")
    //     // alert("Os Campos do Formulário foram Resetados!")
    //     toast.success("Os campos do formulário foram resetados!")
    // }

    // const submit = (e) => {
    //     const product = {
    //         "name": name,
    //         "brand": marca,
    //         "price": preco,
    //         "address": endereco,
    //         "post_date": data,
    //     }
    //     e.preventDefault()
    //     // createProduct(product)
    //     setName("")
    //     setMarca("")
    //     setPreco("")
    // }
    /* onSubmit={submit} */
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
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div>{formik.errors.name}</div>
                            ) : null}
                            <span className="focus-input" data-placeholder="Nome..."></span>
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
                            {formik.touched.brand && formik.errors.brand ? (
                                <div>{formik.errors.brand}</div>
                            ) : null}
                            <span className="focus-input" data-placeholder="Marca..."></span>
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
                            />
                            {formik.touched.post_date && formik.errors.post_date ? (
                                <div>{formik.errors.post_date}</div>
                            ) : null}
                            <span className="focus-input" data-placeholder="Data..."></span>
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
                            />
                            {formik.touched.address && formik.errors.address ? (
                                <div>{formik.errors.address}</div>
                            ) : null}
                            <span className="focus-input" data-placeholder="Endereço..."></span>
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
                            />
                            {formik.touched.price && formik.errors.price ? (
                                <div>{formik.errors.price}</div>
                            ) : null}
                            <span className="focus-input" data-placeholder="Preço..."></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button type='submit' className="login-form-btn button_submit">Enviar</button>
                        </div>



                        {/* <div className="login-form-btn">
                            <button type='button' className="login-form-btn button_submit" >Reset</button>
                        </div> */}
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