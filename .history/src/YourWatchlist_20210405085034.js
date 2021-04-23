import {useEffect, useState} from 'react'

const YourWatchlist = (props) => {
    const [list, setList] = useState([])

    

    return (
        <div>
    <h1>Your Watchlist</h1>
            {list.map(stocks => {
                return (
                    <h1>{props.stocks}</h1>
                )
            })}
        
            
        </div>
    )
}

export default YourWatchlist