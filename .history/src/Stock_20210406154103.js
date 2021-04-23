import React, {useContext} from 'react'
import GlobalContext from './GlobalState'
import YourWatchlist from './YourWatchlist'




const Stock = ({stock}) => {
    
   
   
    return (
        <div>
            <h1>{stock.symbol} : {stock.price}</h1>
            <button>Add stock</button>
        </div>
    )
    
}


export default Stock