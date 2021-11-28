import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import Test from './Test'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const Setting = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="main">
        <div className="sub-main1">
        <img src="https://firebasestorage.googleapis.com/v0/b/hello-react-a494e.appspot.com/o/exit-trendy-icon-button-symbol-260nw-1843178437-removebg-preview.png?alt=media&token=fa576227-0993-45c2-be2f-9db2fbca22c5" alt="" className="" />    
        <button className="buttonlogout" onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
        </div>
    </div>
    )
}

export default Setting;