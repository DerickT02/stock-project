import React, {createContext, useReducer, useEffect} from 'react'
import Appreducer from './Appreducer'

const initialState = {
    watchList: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const[state, dispatch] = useReducer(Appreducer, initialState)
}