import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from '../../components/Card'
import LayoutComponents from '../../components/LayoutComponents'
import SearchIcon from '../../assets/search.svg'
import perfil from '../../images/perfil.png'


const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

export const CadastroProduto = () => {
    const [name, setName] = useState("");
    const [marca, setMarca] = useState("");
    const [data, setData] = useState("");
    const [endereco, setEndereco] = useState("");
    const [preco, setPreco] = useState("");

    function createProduct(product) {
        fetch(API_URL + "/product", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }

    function resetar() {
        setName("")
        setMarca("")
        setData("")
        setEndereco("")
        setPreco("")
        alert("Os Campos do Formulário foram Resetados!")
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
        alert("Produto Enviado!")
    }

    return (
        <LayoutComponents>
            <form onSubmit={submit} className="login-form">
                <span className="login-form-title"> Adicionar Produto </span>
                <br />
                {/* <span className="login-form-title">
            <img src={jpIMG} alt="Jovem Programador" />
          </span> */}

                <div className="wrap-input">
                    <input
                        required
                        id='name'
                        className={name !== "" ? "has-val input" : "input"}
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome..."></span>
                </div>

                <div className="wrap-input">
                    <input
                        id='marca'
                        className={marca !== "" ? "has-val input" : "input"}
                        type="text"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Marca..."></span>
                </div>

                <div className="wrap-input">
                    <input
                        required
                        id='data'
                        className={data !== "" ? "has-val input" : "input"}
                        type="text"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Data..."></span>
                </div>

                <div className="wrap-input">
                    <input
                        required
                        id='endereco'
                        className={endereco !== "" ? "has-val input" : "input"}
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Endereço..."></span>
                </div>

                <div className="wrap-input">
                    <input
                        required
                        id='preco'
                        className={preco !== "" ? "has-val input" : "input"}
                        type="text"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Preço..."></span>
                </div>

                <div className="container-login-form-btn">
                    <button type='submit' className="login-form-btn button_submit">Enviar</button>
                </div>

                <Link to="/Main" >
                    <div className="container-login-form-btn">
                        <button type='button' className="login-form-btn button_submit">Voltar</button>
                    </div>
                </Link>

                <div className="login-form-btn">
                    <button type='button' className="login-form-btn button_submit" onClick={resetar}>Reset Total</button>
                </div>
            </form>
        </LayoutComponents>
    );
};


export default CadastroProduto