import React from 'react'
import YourWatchlist from './YourWatchlist'




const Stock = (props) => {
    const list = []
    console.log(list)
    return (
        <div>
            <h1>{props.symbol} : {props.price}</h1>
            <button onClick = {list.push(Stock)}>Add stock</button>
        </div>
    )
    
}


export default Stock