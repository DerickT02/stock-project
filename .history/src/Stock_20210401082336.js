import react from 'react'



const Stock = ({symbol, coin}) => {
    return (
        <div>
            <p>{symbol} : {coin}</p>
        </div>
    )
}


export default Stock