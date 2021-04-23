import react from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({handleLogout}) => {
    return (
        <div className = "Nav">
            <h1>AutoStock</h1>
            <div className = 'buttonContainer'>
            <Link to = '/yourwatchlist'><button>Your Watchlist</button></Link>
            <Link to = '/watchlist'><button>Market</button></Link>
            <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
            </div>
        </div>
    )
}

export default Nav