import React from 'react'




const Stock = (props) => {
    return (
        <div>
            <h1>{props.symbol} : {props.price}</h1>
            <button>Add Stock</button>
        </div>
    )
}


export default Stock