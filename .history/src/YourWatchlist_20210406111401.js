import {useEffect, useState} from 'react'
import axios from 'axios'
import Stock from './Stock'
import {Link} from 'react-router-dom'

const YourWatchlist = (props) => {
    const [list, setList] = useState([])

    

    

    

    return (
        <div>
    <h1>Your Watchlist</h1>
           <Link to = '/watchlist'><button>Back</button></Link>
           
            
        </div>
    )
}

export default YourWatchlist