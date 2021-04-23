import React, {createContext, useReducer, useEffect} from 'react'
import Appreducer from './Appreducer'

const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : []
}

export const GlobalContext = createContext(initialState)




export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    const addStocktoWatchlist = (...stock) => {
        dispatch({type: "ADD_STOCK_TO_WATCHLIST", payload: stock})
    }

    const removeStockfromWatchlist = (symbol) => {
        dispatch({'type':'REMOVE_STOCK_FROM_WATCHLIST', payload: symbol})
    }

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
    }, [state])

    return (
        <GlobalContext.Provider value = {{watchList: state.watchList, addStocktoWatchlist, removeStockfromWatchlist}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider

