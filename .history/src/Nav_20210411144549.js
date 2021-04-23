import react from 'react'
import { Link } from 'react-router-dom'

const Nav = ({handleLogout}) => {
    return (
        <div>
            <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
            <Link to = '/yourwatchlist'><button>Your Watchlist</button></Link>
            <Link to = '/watchlist'><button>Market</button></Link>
        </div>
    )
}

export default Nav