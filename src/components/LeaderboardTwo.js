import React from 'react'
import './leaderboard.css'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
function LeaderboardTwo() {
    return (
        <div className="contain">
            <Button variant="contained" style={{background:'#be5ed4',width:"200px",marginTop:'20px'}}>
                 <Link to="/leaderboard">Leaderboard One</Link>
            </Button>
        </div>
    )
}

export default LeaderboardTwo
