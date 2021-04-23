import React, {createContext, useReducer, useEffect, useState} from 'react'
import Appreducer from './Appreducer'
import axios from 'axios'

const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : []

}

export const GlobalContext = createContext(initialState)




export const GlobalProvider = (props) => {

    const [stocks, setStocks] = useState([])
    const [state, dispatch] = useReducer(Appreducer, initialState)

    const addStocktoWatchlist = (stock) => {
        dispatch({type: "ADD_STOCK_TO_WATCHLIST", payload: stock})
    }

    const removeStockfromWatchlist = (symbol) => {
        dispatch({'type':'REMOVE_STOCK_FROM_WATCHLIST', payload: symbol})
    }

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
    }, [state])

    useEffect( () => {
        axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,GE,F,BA,XOM,BRK.A,CVX,WBA,MO,RYDAF,MRNA,CMCSA,BP,DUK,DIS,NFLX,AMZN,GME,AMC,V,JNJ,TGT,ADBE,CRM,BABA,JPM,PYPL?apikey=29e1ca911facbf34d2f755785bed0de7')
        .then(res => {
            setStocks(res.data)
            
        }).catch(error => error)
      
    }, [])

    return (
        <GlobalContext.Provider value = {{watchList: state.watchList, addStocktoWatchlist, removeStockfromWatchlist, stocks}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider

