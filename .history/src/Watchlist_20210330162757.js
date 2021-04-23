import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'


const key = process.env.REACT_APP_API_KEY

const WatchList = ({handleLogout}) => {
 
    const [stocks, setStocks] = useState([])

 //'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=29e1ca911facbf34d2f755785bed0de7'


useEffect( () => {
    axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=29e1ca911facbf34d2f755785bed0de7')
    .then(res => {
        setStocks(res)
    }).catch(error => error)
  
}, [])



return (
    <div>
        <h1>WatchList</h1>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        <ul>
            
        </ul>
    
    </div>
)
}


export default WatchList

