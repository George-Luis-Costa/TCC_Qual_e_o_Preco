import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from '../../components/Card'
import LayoutComponents from '../../components/LayoutComponents'
import SearchIcon from '../../assets/search.svg'
import perfil from '../../images/perfil.png'


const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`
// const searchData = async (title) => {
//     const response = await fetch(`${API_URL}${title}`, { method: 'POST' })
//     const data = await response.json()
//     setAds(data)
//     console.log(data)
// }
// useEffect(() => {
//     // searchData(`/product`)

// }, [])

export const CadastroProduto = () => {
    const [name, setName] = useState("");
    const [marca, setMarca] = useState("");
    const [data, setData] = useState("");
    const [endereco, setEndereco] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Adicionar Produto </span>
                <br />
                {/* <span className="login-form-title">
            <img src={jpIMG} alt="Jovem Programador" />
          </span> */}

                <div className="wrap-input">
                    <input
                        className={name !== "" ? "has-val input" : "input"}
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome..."></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={marca !== "" ? "has-val input" : "input"}
                        type="name"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Marca..."></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={data !== "" ? "has-val input" : "input"}
                        type="name"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Data..."></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={endereco !== "" ? "has-val input" : "input"}
                        type="name"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Endereço..."></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Enviar</button>
                </div>

                <div className="login-form-btn">
                    <Link className="txt2" to="/Main">
                        Voltar
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    );
};


export default CadastroProduto