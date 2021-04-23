import React, {createContext, useReducer, useEffect} from 'react'
import Appreducer from './Appreducer'

const initialState = {
    watchList: localStorage.getItem(watchList)
}

export const GlobalContext = createContext(initialState)




export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    const addStocktoWatchlist = (stock) => {
        dispatch({type: "ADD_STOCK_TO_WATCHLIST", payload: stock})
    }

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
    }, [state])

    return (
        <GlobalContext.Provider value = {{watchList: state.watchList, addStocktoWatchlist}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider

