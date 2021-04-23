import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


const key = process.env.REACT_APP_API_KEY

const WatchList = ({handleLogout}) => {
    const [price, setPrice] = useState('');
    const [symbol, setSymbol] = useState('')
    const [stockList, setStockList] = useState([])

 


useEffect(("https://api.twelvedata.com/stocks?country=United%20States&apikey=57b45ba0f53548ca9202d47e00894140") => {
  fetch()
  .then((res) => res.json())
  .then((resp) => <>{setPrice(resp[0].price), setSymbol(resp[0].symbol)}</>)
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