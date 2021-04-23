import {useEffect, useState} from 'react'

const YourWatchlist = (props) => {
    const [list, setList] = useState(props.list)


    return (
        <div>
            {list.map(() => {
                <h1>Hello</h1>
            })}
        </div>
    )
}

export default YourWatchlist