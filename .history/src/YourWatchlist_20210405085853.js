import {useEffect, useState} from 'react'

const YourWatchlist = (props) => {
    const {list, setList} = props

    

    return (
        <div>
    <h1>Your Watchlist</h1>
            {list.map(() => {
                return (
                    <h1>{props.list}</h1>
                )
            })}
        
            
        </div>
    )
}

export default YourWatchlist