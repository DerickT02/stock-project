import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const WatchList = ({handleLogout}) => {



return (
    <div>
        <h1>WatchList</h1>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
    </div>
)
}


export default WatchList