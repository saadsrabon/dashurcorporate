import  { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import app from '../Firebase/Firebase.config'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object



// Initialize Firebase Authentication and get a reference to the service
export const AuthContext = createContext()
const auth = getAuth(app)


const Contextfile = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(true)

    // Sign up Method pass
    const CreateUser =(email,password)=>{
       setLoading(true)
     return  createUserWithEmailAndPassword(auth,email,password);
   
    }
  
    // Sign in method
    const Signin=(email,password)=>{
       setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
      return signOut(auth);
    }
//  forget password method
const forgetPasswordMethod =(email)=>{
   setLoading(true)
    return sendPasswordResetEmail(auth,email)
}
      

    // Get user login or not
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            
                const uid = currentUser.uid;
                setUser(currentUser)
                console.log(uid)
                setLoading(false)

                // ...
              } else {
              setUser(null)
              }
        })
        return ()=>{
            unsubcribe()
        }
    },[])

    // Creating Object to store All the authentication data for provider
    const authInfo ={CreateUser,user ,Signin ,signOutUser ,loading,setLoading ,forgetPasswordMethod}
    return (
    
         <AuthContext.Provider value={authInfo}>
          {children}
         </AuthContext.Provider>
       
    );
};

export default Contextfile;