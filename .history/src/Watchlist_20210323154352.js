import React, {Component, useState, useEffect} from 'react';

const WatchList = ({handleLogout}) => {



return (
    <div>
        <h1>WatchList</h1>
        <button onClick = {handleLogout}>Logout</button>
    </div>
)
}


export default WatchList