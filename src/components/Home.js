import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'

const Home = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <div className="Home1">
                <div className="Home2">
                    <div className="img">
                        <div className="container-image">
                        <img src="./LOGO.png" alt="LOGO" className="photo" />
                        </div>
                    </div>     
                <h1 className="h11">GazeGuard</h1>
                {currentUser ? (
                    
                    <p className="cur">You are logged in <br/><Link to="/dashboard" className="btn btn-primary">View Dashboard</Link></p>
                ) : (
                    <p>
                        <div className="Home">
                        <Link to="/login" className="btn btn-primary">Log In</Link> or <Link to="/signup" className="btn btn-success">Sign Up</Link>
                        </div>
                        
                    </p>
                )}

                </div>
               
            </div>
        </>
    )
}

export default Home;