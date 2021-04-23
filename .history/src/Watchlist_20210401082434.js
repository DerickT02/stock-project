import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Search from './Search'





const WatchList = ({handleLogout}) => {
 
    const [stocks, setStocks] = useState([])
    const [search, setSearch] = useState ('')

 //'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=29e1ca911facbf34d2f755785bed0de7'


useEffect( () => {
    axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=29e1ca911facbf34d2f755785bed0de7')
    .then(res => {
        setStocks(res.data)
        
    }).catch(error => error)
  
}, [])




return (
    <div>
        <h1>WatchList</h1>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
       <br></br>
       <h2>Search Stock</h2>
       <input ></input>
         
       {stocks.map(stock => {
           return (
               <h1>{stock.symbol}: {stock.price}</h1>
           )
       })}
    
    </div>
)
}


export default WatchList

