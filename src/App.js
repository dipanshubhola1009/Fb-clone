import React from 'react';
import './App.css';
import Header from './container/Header';
import MainContainer from'./container/MainContainer'
import {useState } from 'react'
import Login from './container/Login';
import  { provider , auth } from './firebase'
function App() {
  const [user,setUser] = useState();
  const signin = ()=>{
    auth.signInWithPopup(provider).then(result => {setUser(result.user) ; console.log(result.user)}).catch( err => alert(err));
} 
const Guest = () =>{
     setUser({"displayName" : "Guest" , "photoURL" : 'data:image/jpeg;base64,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'});
}
  return (
    <div className="App">
      {user ?
          <>
              <Header user={user} />
              <MainContainer user={user} />
          </>
            :

          <>
            <Login Signin={signin} Guest={Guest} />
          </>
      }
    </div>
  );
}

export default App;
