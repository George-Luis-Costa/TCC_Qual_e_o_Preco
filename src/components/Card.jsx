import React from "react"

const Card = ({ads}) => {
    
    return (
        <div className='movie'>
            <div>
                <p>{ads.post_date}</p>
            </div>
            <div>
                <img src={'https://via.placeholder.com/400'} alt="" />
            </div>

            <div>
                <span>{ads.brand}</span>
                <h3>{ads.name} - R$ {ads.price}</h3>
                <p>{ads.address}</p>
            </div>
        </div>
    )
}

export default Card