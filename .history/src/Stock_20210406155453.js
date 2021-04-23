import React, {useContext} from 'react'
import {GlobalContext} from './GlobalState'
import YourWatchlist from './YourWatchlist'




const Stock = (props) => {
    const {
        addStocktoWatchlist
    } = useContext(GlobalContext)

   
   
   
    return (
        <div>
            <h1>{props.symbol} : {props.price}</h1>
            <button onClick = {() => addStocktoWatchlist(props.data)}>Add stock</button>
        </div>
    )
    
}


export default Stock