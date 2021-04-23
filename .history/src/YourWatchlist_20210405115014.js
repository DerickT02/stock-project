import {useEffect, useState} from 'react'
import axios from 'axios'
import Stock from './Stock'

const YourWatchlist = (props) => {
    const [list, setList] = useState([])

    useEffect( () => {
        axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,GE,F,BA,XOM,BRK.A,CVX,WBA,MO,RYDAF,MRNA,CMCSA,BP,DUK,DIS,NFLX,AMZN,GME,AMC,V,JNJ,TGT,ADBE,CRM,BABA,JPM,PYPL?apikey=29e1ca911facbf34d2f755785bed0de7')
        .then(res => {
            setList(res.data)
            
        }).catch(error => error)

    }, [])

    

    return (
        <div>
    <h1>Your Watchlist</h1>
           
            {list.map(stock => {
                return (
              <>
            <Stock key = {Math.random()} 
          symbol = {stock.symbol} 
          price = {stock.price} />
          
          
          </>
          )
            })}
        
            
        </div>
    )
}

export default YourWatchlist