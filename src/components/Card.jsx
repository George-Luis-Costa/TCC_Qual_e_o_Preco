import React from "react"
import img from "../images/Supermercado.jpg"

const Card = ({ ads }) => {

    return (
        <div className='movie'>
            <div>
                <p>{ads.post_date}</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>



            <div>
                <span>{ads.brand}</span>
                <h3>{ads.name}</h3>
                <h3>R$ {ads.price}</h3>
                <p style={{ color: "aliceblue" }}>{ads.address}</p>
            </div>
        </div>
    )
}

export default Card