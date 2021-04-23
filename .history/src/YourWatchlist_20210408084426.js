import {useEffect, useState, useContext} from 'react'
import { GlobalContext } from './GlobalState'
import axios from 'axios'


import {Link} from 'react-router-dom'

const YourWatchlist = (props) => {
    const {watchList, removeStockfromWatchlist} = useContext(GlobalContext)
    const [price, setPrice] = useState([0])
    useEffect( () => {
        axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,GE,F,BA,XOM,BRK.A,CVX,WBA,MO,RYDAF,MRNA,CMCSA,BP,DUK,DIS,NFLX,AMZN,GME,AMC,V,JNJ,TGT,ADBE,CRM,BABA,JPM,PYPL?apikey=29e1ca911facbf34d2f755785bed0de7')
        .then(res => {
            setPrice(res.data.price)
            
        }).catch(error => error)
      
    }, [])

    
    const filteredList = list.filter(stock => stock.symbol !== watchList.symbol)
    
    console.log(price)
    
    console.log(list)
    console.log(watchList)
    console.log(filteredList)
       


    return (
        <div>
        <h1>Your Watchlist</h1>
           <Link to = '/watchlist'><button>Back</button></Link>
           {watchList.map((stock) => {
               return (
                <>
                <h1 key = {Math.random()}>{stock.symbol}:{stock.price}</h1>
                <button onClick = {() => {removeStockfromWatchlist(stock.symbol)}}>Hello Button</button>
                </>
               )
           })}
            
        </div>
    )
}

export default YourWatchlist