import React, {Component, useState, useEffect} from 'react';

const WatchList = (prop) => {
const {handLogout} = prop


return (
    <div>
        <h1>WatchList</h1>
        <button onClick = {handLogout}>Logout</button>
    </div>
)
}


export default WatchList