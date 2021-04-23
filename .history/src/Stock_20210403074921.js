import React from 'react'
import YourWatchlist from './YourWatchlist'



const Stock = ({symbol, price}) => {
    return (
        <div>
            <h1>{symbol} : {price}</h1>
            <button onClick = {
                <YourWatchlist />
            }></button>
        </div>
    )
}


export default Stock