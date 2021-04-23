import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'


const key = process.env.REACT_APP_API_KEY

const WatchList = ({handleLogout}) => {
 
    const [stockList, setStockList] = useState([])

 


useEffect( async() => {
    const response = await fetch('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=29e1ca911facbf34d2f755785bed0de7')
    const data = await response.json()
  
  
}, [])



return (
    <div>
        <h1>WatchList</h1>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        <ul>
            {stockList.map(stock => {
                <li key = {stock.symbol}>{stock.symbol}:{stock.price}</li>
            })}
        </ul>
    
    </div>
)
}


export default WatchList

