import {useEffect, useState} from 'react'

const YourWatchlist = (props) => {
    const [list, setList] = useState(props.list)


    return (
        <div>
            <h1>Your watchlist</h1>
        </div>
    )
}

export default YourWatchlist