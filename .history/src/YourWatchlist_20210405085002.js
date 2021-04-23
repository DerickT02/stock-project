import {useEffect, useState} from 'react'

const YourWatchlist = (props) => {
    const [list, setList] = useState([])

    const {stock} = props

    return (
        <div>
    <h1>Your Watchlist</h1>
            {list.map(stocks => {
                return (
                    <h1>{stocks.stock}</h1>
                )
            })}
        
            
        </div>
    )
}

export default YourWatchlist