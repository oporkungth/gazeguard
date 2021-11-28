import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import Test from './Test'
import Social from './Social'
import ReactTypingEffect from 'react-typing-effect';
const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
     
      <div className="App">
          <Test />
          <div className="content">            
              <img src="https://firebasestorage.googleapis.com/v0/b/hello-react-a494e.appspot.com/o/LOGO.png?alt=media&token=a7712cac-581b-4e44-950a-bba4fb0b0c74" alt="LOGO" className="photo55" />
              <span><h1>Welcome</h1></span><h1>To</h1>
              <h1 className="eff">
              <ReactTypingEffect text={['GazeGuard']} speed={300} eraseDelay={50} className="typingeffect" /> 
              </h1>
              
            
        </div>
            <Social />
      </div>
 
    )
}
export default DashBoard;