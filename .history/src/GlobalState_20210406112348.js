import React, {createContext, useReducer, useEffect} from 'react'
import Appreducer from './Appreducer'

const initialState = {
    watchList: []
}

export const GlobalContext = createContext(initialState)


const addStocktoWatchlist = stock => {
    dispatch({type: "ADD_STOCK_TO_WATCHLIST", payload: stock})
}

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    return (
        <GlobalContext.Provider value = {{watchList: state.watchList, addStocktoWatchlist}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState

