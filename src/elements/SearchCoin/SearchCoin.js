import React from 'react'
import './SearchCoin.css'
function SearchCoin(name, image) {
    return (
        <div className='searchCoin'>
        <img src={image}/>
        <p>{name}</p>
            
        </div>
    )
}

export default SearchCoin
