import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import './style.css'
import SearchIcon from '../../assets/search.svg'

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`

// const obj = {
//     name: "Gasolina (L)",
//     brand: "Petrobras",
//     price: "4,70",
//     post_date: "27/09/22"
// }

const Home = () => {

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
            <h1>Pesquisar...</h1>
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
                        // <div className='container'>
                        //     <Card ads = {obj}/>
                        //     <Card ads = {obj}/>
                        //     <Card ads = {obj}/>
                        //     <Card ads = {obj}/>
                        //     <Card ads = {obj}/>
                        //     <Card ads = {obj}/>
                        // </div>
                    )
            }
        </div>
    )
}

export default Home