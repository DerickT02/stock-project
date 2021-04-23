import {useEffect, useState, useContext} from 'react'
import { GlobalContext } from './GlobalState'


import {Link} from 'react-router-dom'

const YourWatchlist = (props) => {
    const {watchList} = useContext(GlobalContext)

    const[list, setList] = useState(watchList)



    return (
        <div>
        <h1>Your Watchlist</h1>
           <Link to = '/watchlist'><button>Back</button></Link>
           {list.map((stock) => {
               return (
                <h1 key = {Math.random()}>{stock.symbol}:{stock.price}</h1>
               )
           })}
            
        </div>
    )
}

export default YourWatchlist