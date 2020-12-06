import React,{useContext,useState,useEffect} from 'react'
import {auth} from '../../Fire'

const AuthContext =React.createContext()

export function useAuth(){
      return useContext(AuthContext)
}
export function AuthProvider({children}) {
     const[currentUser,setCurrentUser]=useState()
     const[loading,setLoading]=useState(true)
     function signup(email,password){
          return auth.createUserWithEmailAndPassword(email,password)
     }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    // function signup(email,password){
    //     auth.createUserWithEmailAndPassword(email,password).then(
    //         res=>handleUserCreated(res.user.uid)
    //     )
    // }
    // function handleUserCreated(userId){
    //     let id=userId
    // }
    function logout(){
      return  auth.signOut()
    }
     useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged(user =>{
                // console.log(user);
                setCurrentUser(user)
                setLoading(false)
        }) 

        return unsubscribe
     },[])
    const value={
        currentUser,
        signup,
        login,
        logout
    }
    
    return (

        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
 