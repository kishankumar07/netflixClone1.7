import { Navigate, Route, Routes } from "react-router-dom"
import ManageProfile from "./screens/ManageProfile"
import MainPage from "./screens/MainPage"
import VideoPlayer from "./screens/VideoPlayer"
import Login from "./screens/Login"
import { useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"
import {ToastContainer} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "./store/firebaseContext"
 


const App = () => {
  
  const authContext = useContext(AuthContext)
  if(!authContext){
    throw new  Error('Provide a value to Authcontext');
  }
  const {user,setUser} = authContext;
   const [loading,setLoading]= useState(true);
   
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user) setUser(user)
        setLoading(false);
        console.log('this is the user at App.tsx:',user)
    })
  },[])

  if(loading){
    return(
      <div className="h-screen flex justify-center items-center bg-black">
      <img src="./netflix-spinner.gif" alt="Loading..." />
    </div>
    )
  }

  // useEffect(()=>{
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       navigate('/')
  //     }else{
  //       navigate('/login')
  //     }
  //   })
  // },[])


  return (
    <div className="App">
      <ToastContainer theme="dark"/>
        <Routes>
            {/* Protect routes based on the user's authentication status */}
        {user ? (
          <>
            <Route path="/" element={<Navigate replace to='/home' />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/profiles" element={<ManageProfile />} />
            <Route path="/video-player" element={<VideoPlayer />} />
            {/* Redirect /login to /home if already logged in */}
            <Route path="/login" element={<Navigate replace to='/home' />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate replace to='/login' />} />
            <Route path="/login" element={<Login />} />
            {/* Redirect any other route to login if not authenticated */}
            <Route path="*" element={<Navigate replace to='/login' />} />
          </>
        )}
        </Routes>
    </div>
  )
}

export default App
