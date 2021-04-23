import React, {useContext} from 'react'
import {GlobalContext} from './GlobalState'
import './Stock.css'




const Stock = (props) => {
    const {
        addStocktoWatchlist
    } = useContext(GlobalContext)

   
   
   
    return (
        <div className = "stockContainer">
            <h1 key = {props.key}>{props.symbol} : {props.price}</h1>
            <button onClick = {() => addStocktoWatchlist(props)}>Add stock</button>
        </div>
    )
    
}


export default Stock