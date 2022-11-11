import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from '../../components/Card'
import '../search_produto/style.css'
import SearchIcon from '../../assets/search.svg'
import { toast } from 'react-toastify'

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`


const Home = () => {

    const toastId = React.useRef(null)
    const [ads, setAds] = useState([])
    const [buscaTermo, setBuscaTermo] = useState([])

    const searchData = async (title) => {
        toastId.current = toast.loading("Buscando...")
        const response = await fetch(`${API_URL}${title}`, { method: 'GET' })
        const data = await response.json()
        setAds(data)
        // console.log(data)
        if (data.length === 0) {
            // toast.info("Anúncio(s) não encontrado(s)!")
            toast.update(toastId.current, {
                render: "Anúncio(s) não encontrado(s)!",
                type: "info",
                isLoading: false,
                closeButton: true,
                autoClose: true
              })
        }
        else {
            // toast.success("Anúncio(s) encontrado(s)!")
            toast.update(toastId.current, {
                render: "Anúncio(s) encontrado(s)!",
                type: "success",
                isLoading: false,
                closeButton: true,
                autoClose: true
              })
        }
    }
    useEffect(() => {
        searchData(`/product`)

    }, [])

    return (
        <div className='app'>
            <h1 className='h1'>Pesquisar...</h1>



            <div className='search'>
                <input type="text"
                    placeholder='Buscar Produtos'
                    value={buscaTermo}
                    onChange={(e) => { setBuscaTermo(e.target.value) }}
                />
                <img
                    src={SearchIcon}
                    alt='Busca'
                    onClick={() => searchData(
                        `/product/search?name=${String(buscaTermo)}`
                    )}
                />
            </div>

            <Link to={"/Main"} className='container'>
                <button className='movie buttonVoltar'>
                    <span className='spanButton'>Voltar</span>
                </button>
            </Link>

            {
                (ads?.length > 0)
                    ? (
                        <div className='container'>
                            {ads.map((ads) => (
                                <Card ads={ads} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>Sem anúncios</h2>
                        </div>
                    )
            }
        </div>
    )
}

export default Home