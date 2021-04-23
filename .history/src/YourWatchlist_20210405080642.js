import {useEffect, useState} from 'react'

const YourWatchlist = (props) => {
    const {list} = props


    return (
        <div>
            {props.list.map(() => {
                <h1>Hello</h1>
            })}
        </div>
    )
}

export default YourWatchlist