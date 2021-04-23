import {useEffect, useState} from 'react'

const YourWatchlist = (props) => {
    

    

    return (
        <div>
    <h1>Your Watchlist</h1>
            {props.list.map(() => {
                return (
                    <h1>{props.list}</h1>
                )
            })}
        
            
        </div>
    )
}

export default YourWatchlist