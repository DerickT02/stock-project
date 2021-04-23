import React from 'react'
import YourWatchlist from './YourWatchlist'




const Stock = (props) => {
    
   
    return (
        <div>
            <h1>{props.symbol} : {props.price}</h1>
            <button>Add stock</button>
        </div>
    )
    
}


export default Stock