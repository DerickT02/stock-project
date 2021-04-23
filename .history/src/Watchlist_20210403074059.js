import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Stock from './Stock'
import YourWatchlist from './YourWatchlist'





const WatchList = ({handleLogout}) => {
 
    const [stocks, setStocks] = useState([])
    const [search, setSearch] = useState ('')

 //'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,F,UTX?apikey=29e1ca911facbf34d2f755785bed0de7'


useEffect( () => {
    axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,GE,F,BA,XOM,BRK.A,CVX,WBA,MO,RYDAF,MRNA,CMCSA,BP,DUK,DIS,NFLX,AMZN,GME,AMC,V,JNJ,TGT,ADBE,CRM,BABA,JPM,PYPL?apikey=29e1ca911facbf34d2f755785bed0de7')
    .then(res => {
        setStocks(res.data)
        
    }).catch(error => error)
  
}, [])

const handleChange = (e) => {
    setSearch(e.target.value)
}

const filteredStocks = stocks.filter(stock => 
    stock.symbol.toLowerCase().includes(search.toLowerCase())
)




return (
    <div>
        <h1>Bluelist</h1>
        <h3>For all your blue chip stock needs</h3>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        <Link to = '/yourwatchlist'><button>Your Watchlist</button></Link>
       <br></br>
       <h2>Search Stock</h2>
       <input type = 'text' onChange = {handleChange}></input>
         
      {filteredStocks.map(stock => {
          return (
            <Stock key = {Math.random()} 
          symbol = {stock.symbol} 
          price = {stock.price} />
          )
          
      })}
    
    </div>
)
}


export default WatchList

