import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Link } from "react-router-dom"
//import SearchIcon from '../../assets/search.svg'

const API_URL = `https://qualpreco-api.herokuapp.com/tcc-api`


const Dia = () => {

    const [ads, setAds] = useState([])

    useEffect(() => {
        
      fetch(API_URL + "/product/day", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((data) => {
        setAds(data)
      })
      .catch((err) => console.log(err))
        
    }, [])

    return (
        <div className='app'>
            <h1 className='h1'>Anúncios do Dia...</h1>

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
                                <Card 
                                    ads={ads} 
                                    key = {ads._id.$oid}
                                />
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

export default Dia