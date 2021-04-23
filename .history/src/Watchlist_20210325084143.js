import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const WatchList = ({handleLogout}) => {
    const [price, setPrice] = useState('');
    const [ticker, setTicker] = useState('')



useEffect(() => {
  fetch("https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=29e1ca911facbf34d2f755785bed0de7"
  )
  .then((res) => res.json())
  .then((resp) => <>{setPrice()}</>)
}, [])


return (
    <div>
        <h1>WatchList</h1>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        console.log()
    </div>
)
}


export default WatchList