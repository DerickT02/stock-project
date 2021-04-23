import {useEffect, useState, useContext} from 'react'
import { GlobalContext } from './GlobalState'

import {Link} from 'react-router-dom'

const YourWatchlist = (props) => {
    
    const {watchList} = useContext(GlobalContext)

    return (
        <div>
        <h1>Your Watchlist</h1>
           <Link to = '/watchlist'><button>Back</button></Link>
           {watchList.map((stock) => {
               <h1>{stock.symbol} : stock.price</h1>
           })}
            
        </div>
    )
}

export default YourWatchlist