import React from 'react'



const Stock = ({symbol, price}) => {
    return (
        <div>
            <h1>{symbol} : {price}</h1>
        </div>
    )
}


export default Stock