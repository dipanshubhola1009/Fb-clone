import { Avatar } from '@material-ui/core'
import React from 'react'
import './login.css'


function Login({Signin , Guest}) {
   
    return (
        <div className="login">
            <h1>FaceHook</h1>
            <div className="signin"> 
                <Avatar src='https://cdn.iconscout.com/icon/free/png-512/facebook-235-569311.png' />
                <button onClick={Signin} >SignIn with Google</button>
                <button onClick={Guest} >Guest Entry</button>
            </div>
           
        </div>
    )
}

export default Login
