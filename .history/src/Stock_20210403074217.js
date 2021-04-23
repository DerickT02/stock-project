import React from 'react'
import YourWatchlist from './YourWatchlist'



const Stock = ({symbol, price}) => {
    return (
        <div>
            <h1>{symbol} : {price}</h1>
            <button></button>
        </div>
    )
}


export default Stock