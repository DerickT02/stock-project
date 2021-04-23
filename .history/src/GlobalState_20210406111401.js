import React, {createContext, useReducer, useEffect} from 'react'
import Appreducer from './Appreducer'

const initialState = {
    watchList: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const[state, dispatch] = useReducer(Appreducer, initialState)

    return (
        <GlobalContext.Provider value = {{watchList: state.watchList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

