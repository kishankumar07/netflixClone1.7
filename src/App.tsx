import { Navigate, Route, Routes } from "react-router-dom"
import ManageProfile from "./screens/ManageProfile"
import MainPage from "./screens/MainPage"
import VideoPlayer from "./screens/VideoPlayer"
import Login from "./screens/Login"


const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/home" element={<MainPage/>}/>
            <Route path="/profiles" element={<ManageProfile/>}/>
            <Route path="/" element={<Navigate replace to='/profiles'/>}/>
            <Route path="/video-player" element={<VideoPlayer/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default App
