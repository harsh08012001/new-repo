import React,{useState,useEffect} from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app"
import { Link } from 'react-router-dom';

const firebaseApp = initializeApp({ 
    apiKey: "AIzaSyDVFdQAxoeJ36wGUkZyugoOFvVLPtpDAIA",
  authDomain: "signin-5da25.firebaseapp.com",
  projectId: "signin-5da25",
  storageBucket: "signin-5da25.appspot.com",
  messagingSenderId: "915958278076",
  appId: "1:915958278076:web:c662fa2795d9ff6e0d2db9",
  measurementId: "G-GYFLTHYT1J"
});
const auth = getAuth(firebaseApp);
const Signin = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
      onAuthStateChanged(auth,person=>{
        if(person){
          setUser(person);
        }
        else{
          setUser(null);
        }
      })
  
    },[]
    )
    const signInWithGoogle=async()=>{
      try{
        await signInWithPopup(auth,new firebase.auth.GoogleAuthProvider);
   
      }
     
      catch(err)
      {
        console.log(err);
  
      }
    }
  return (
    
        <div className='bg-login' id = "loginSection">
      <center>
        {user ?

        < div >
      
          <Link to="/Donate" className='donate1'
           >To donate</Link>
          
          
          <button onClick={()=>auth.signOut()}>Sign out</button>

          

        </div> :
      <button className="banner-section-menu-button " onClick={signInWithGoogle}>sign in with google</button>
      }
      </center>
        
    </div>
      
    
  )
}

export default Signin