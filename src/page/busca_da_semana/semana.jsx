import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from '../../components/Card'
import SearchIcon from '../../assets/search.svg'

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

const Semana = () => {

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
        <div className='app'>
            <h1 className='h1'>Anúncios da Semana...</h1>

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

export default Semana