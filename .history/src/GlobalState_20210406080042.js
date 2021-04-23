import React, {createContext, useReducer, useEffect} from 'react'

const initialState = {
    watchList: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const[state, dispatch]
}