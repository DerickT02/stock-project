import React, {useContext} from 'react'
import {GlobalContext} from './GlobalState'
import YourWatchlist from './YourWatchlist'




const Stock = (props) => {
    const {
        addStocktoWatchlist
    } = useContext(GlobalContext)

   
   
   
    return (
        <div>
            <h1 key = {props.key}>{props.symbol} : {props.price}</h1>
            <button onClick = {() => addStocktoWatchlist(props)}>Add stock</button>
        </div>
    )
    
}


export default Stock