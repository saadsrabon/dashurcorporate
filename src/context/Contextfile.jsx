/* eslint-disable react/prop-types */
import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()

const Contextfile = ({children}) => {
  const googleProvider = new GoogleAuthProvider()
  const [data,setData]= useState([])
  console.log(setData)
  const [loader,setLoader]=useState(true)
  const [user,setUser]= useState(null)
  const auth = getAuth(app);

// Methods of Authentications
// Create User with email password
const  createUserMethod =(email,password)=>{
  setLoader(true)
  return  createUserWithEmailAndPassword(auth, email, password)
}

// Login User
const signInmethod =(email,password)=>{
  setLoader(true)
  return signInWithEmailAndPassword(auth, email, password)

}
  // Google sign In function
  const googleSign =()=>{
    setLoader(true)
     return signInWithPopup(auth, googleProvider)
  
  }
 
  // SignOut method 
 const signOutMethod = ()=>{
  setLoader(true)
  return signOut(auth).then(() => {
      // Sign-out successful.
     
    })
 }
  // update Profile 
  const updateUserProfile = (name ,photourl)=>{
    setLoader(true)
      updateProfile(auth.currentUser, {
          displayName: name, 
          photoURL:photourl,
        })
  }

  // on auth state Change
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setLoader(false)
      })
      return ()=>{
          unsubscribe()
      }
  },[auth])



//Google Sign in

// github Sign in

// Logout User 

  // Object That will pass all the value to auth provider
    const authinfo ={
      createUserMethod ,
      data,
      updateUserProfile, 
      signOutMethod ,
      signInmethod, 
      googleSign,
      user,
      loader,
      setLoader,
      auth
    }
    return (
      <AuthContext.Provider value={authinfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default Contextfile;