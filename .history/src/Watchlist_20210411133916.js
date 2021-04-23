import {useEffect, useState, useContext} from 'react'
import { GlobalContext } from './GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Stock from './Stock'
import YourWatchlist from './YourWatchlist'
import './Stock.css'





const WatchList = ({handleLogout}) => {
 
    const [stocklist, setStocklist] = useState([])
    const [search, setSearch] = useState ('')
    

 
    

 //'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,F,UTX?apikey=29e1ca911facbf34d2f755785bed0de7'

 useEffect( () => {
    axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,GE,F,BA,XOM,BRK.A,CVX,WBA,MO,RYDAF,MRNA,CMCSA,BP,DUK,DIS,NFLX,AMZN,GME,AMC,V,JNJ,TGT,ADBE,CRM,BABA,JPM,PYPL?apikey=29e1ca911facbf34d2f755785bed0de7')
    .then(res => {
        setStocklist(res.data)
        
    }).catch(error => error)
  
}, [])



const handleChange = (e) => {
    setSearch(e.target.value)
}

const filteredStocks = stocklist.filter(stock => 
    stock.symbol.toLowerCase().includes(search.toLowerCase())
)









return (
    <div className = "watchlist">
        <h1>Autostock</h1>
        <h3>Trade anywhere, without actually trading</h3>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        <Link to = '/yourwatchlist'><button>Your Watchlist</button></Link>
       <br></br>
       <h2>Search Stock</h2>
       <input type = 'text' onChange = {handleChange}></input>
         
      {filteredStocks.map(stock => {
          return (
              <div className = "stock">
            <Stock key = {Math.random()} 
          symbol = {stock.symbol} 
          price = {stock.price} />
          
          </div>
          
          )
          
      })}
    
    </div>
)
}


export default WatchList

