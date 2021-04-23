import React, {useContext} from 'react'
import GlobalContext from './GlobalState'
import YourWatchlist from './YourWatchlist'




const Stock = (props) => {
    const { addStocktoWatchlist} = useContext(GlobalContext)
    const { stock } = props
   
    return (
        <div>
            <h1>{stock.symbol} : {stock.price}</h1>
            <button onClick = {() => addStocktoWatchlist(stock)}>Add stock</button>
        </div>
    )
    
}


export default Stock