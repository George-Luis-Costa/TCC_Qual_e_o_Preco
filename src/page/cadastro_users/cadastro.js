import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import './style.css'
import SearchIcon from '../../assets/search.svg'
import perfil from '../../images/perfil.png'


const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`


const Cadastro = () => {

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
        <div className="tela-box" style={{ height: '600px' }}>
            <h1 className="titulo_cadastro">SIGN UP</h1>
            <br /><br />

            <form style={{ color: 'aliceblue' }} className="formulario">

                <div className="inputs_cadastro">
                    <label htmlFor="nome" className="labels_label--format"><strong>Nome:</strong></label>
                    <br />
                    <input type="text" name="nome" id="nome" className="input-cadastro" required />
                    <br />
                    <label htmlFor="sobrenome" className="labels_label--format"><strong>Sobrenome:</strong>
                    </label>
                    <br />
                    <input type="text" name="sobrenome" id="sobrenome" className="input-cadastro" required />
                    <br />
                    <label htmlFor="email" className="labels_label--format"><strong>Email:</strong>
                    </label>
                    <br />
                    <input type="text" name="email" id="email" className="input-cadastro" required />
                    <br />
                    <label htmlFor="password" className="labels_label--format"><strong>Senha:</strong>
                    </label>
                    <br />
                    <input type="text" name="password" id="password" className="input-cadastro" required />
                    <br /><br />

                </div>

                <footer className="anexar_cadastro">
                    <figure>
                        <img src={perfil} alt="Perfil" width="70px" height="70px" />
                    </figure>
                    <label htmlFor="input_avatar" className="button transitionBg" title="Adicione algum arquivo de imagem (png ou jpeg)">Selecione a Foto de Perfil</label>
                    <input type="file" id="input_avatar" name="input_avatar" accept="image/png, image/jpeg" /><br /><br />
                </footer>

                <div className="create_account">
                    <a href="/index.html" title="Voltar para o menu anterior" className="cadastro_link--submit">Voltar</a>
                    <br/>
                    <input type="submit" defaultValue="Criar Conta" className="button_submit button_bg transitionBg input_submit--criarConta" title="Ao clicar seus dados serão enviados" />
                </div>

            </form>
        </div>
    )
}

export default Cadastro