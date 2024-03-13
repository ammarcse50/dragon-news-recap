import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
 const auth = getAuth(app);

const AuthProvider = ({ children }) => {

   
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password)=>{
    setLoading(true)
   
    return signInWithEmailAndPassword(auth, email, password)
  }

   const logOut = () =>{
    return signOut(auth)
   }
      
    useEffect(()=>{

           const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                 console.log(currentUser)

                 setUser(currentUser)
                 setLoading(false)
             
           })

           return ()=>{
             unSubscribe()
           }


    },[])
  const authInfo = { user, logOut, signIn,createUser,loading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
