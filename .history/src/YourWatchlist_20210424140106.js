import {useEffect, useState, useContext} from 'react'
import { GlobalContext } from './GlobalState'
import axios from 'axios'




const YourWatchlist = (props) => {
    const {watchList, removeStockfromWatchlist} = useContext(GlobalContext)
    const [stocks, setStock] = useState([])
    useEffect( () => {
        axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,GE,F,BA,XOM,BRK.A,CVX,WBA,MO,RYDAF,MRNA,CMCSA,BP,DUK,DIS,NFLX,AMZN,GME,AMC,V,JNJ,TGT,ADBE,CRM,BABA,JPM,PYPL?apikey=29e1ca911facbf34d2f755785bed0de7')
        .then(res => {
            setStock(res.data)
            
        }).catch(error => error)
      
    }, [])



    
   
 
    let ourList = stocks.filter(stock => stock.symbol === watchList.sort().symbol)

    console.log(ourList)
    console.log(stocks)
    console.log(watchList)
   
       


    return (
        <div className = 'watchlist'>
            <div className = 'yourstocks'>
            <h1>Your Watchlist</h1>
            </div>
        
           
           {watchList.map((stock) => {
               return (
                <div className = "stockContainer">
               <h1 key = {stock.key}>{stock.symbol}:{stock.price}</h1>
                <button onClick = {() => {removeStockfromWatchlist(stock.symbol)}}>Remove</button>
                </div>
               )
           })}
            
        </div>
    )
}

export default YourWatchlist