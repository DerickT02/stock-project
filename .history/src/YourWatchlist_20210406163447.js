import {useEffect, useState, useContext} from 'react'
import { GlobalContext } from './GlobalState'


import {Link} from 'react-router-dom'

const YourWatchlist = (props) => {
    const {watchList} = useContext(GlobalContext)

    const[list, setList] = useState(watchList)

    function removeStock(symbol){
        setList(list.filter(stock => stock.symbol != symbol))
    }

    useEffect(() => {
        const data = localStorage.getItem('list')
        if(data){
          setList(JSON.parse(data))
        }
      
      }, [])

      useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
      })
      


    return (
        <div>
        <h1>Your Watchlist</h1>
           <Link to = '/watchlist'><button>Back</button></Link>
           {list.map((stock) => {
               return (
                <>
                <h1 key = {Math.random()}>{stock.symbol}:{stock.price}</h1>
                <button onClick = {()=> removeStock(stock.symbol)}>Hello Button</button>
                </>
               )
           })}
            
        </div>
    )
}

export default YourWatchlist