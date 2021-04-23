import React, {useContext} from 'react'
import {GlobalContext} from './GlobalState'
import YourWatchlist from './YourWatchlist'




const Stock = ({symbol, price}) => {
    const {
        addStocktoWatchlist
    } = useContext(GlobalContext)

   
   
   
    return (
        <div>
            <h1>{symbol} : {price}</h1>
            <button onClick = {() => addStocktoWatchlist({symbol})}>Add stock</button>
        </div>
    )
    
}


export default Stock