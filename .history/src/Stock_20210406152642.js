import React, {useContext} from 'react'
import GlobalContext from './GlobalState'
import YourWatchlist from './YourWatchlist'




const Stock = ({stock}) => {
    const { addStocktoWatchlist} = useContext(GlobalContext)
   
    return (
        <div>
            <h1>{stock.symbol} : {stock.price}</h1>
            <button onClick = {() => addStocktoWatchlist()}>Add stock</button>
        </div>
    )
    
}


export default Stock