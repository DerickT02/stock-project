import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


const key = process.env.REACT_APP_API_KEY

const WatchList = ({handleLogout}) => {
    const [price, setPrice] = useState('');
    const [symbol, setSymbol] = useState('')
    const [stockList, setStockList] = useState([])

 


useEffect(() => {
  fetch("https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=29e1ca911facbf34d2f755785bed0de7")
  .then((res) => res.json())
  .then((resp) => <>{setSymbol(resp[1].symbol), setPrice(resp[0].price)}</>)
}, [])


return (
    <div>
        <h1>WatchList</h1>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        
        <ul>
            <li>
                {symbol}: {price}
            </li>
        </ul>
    </div>
)
}


export default WatchList


console.log(key)