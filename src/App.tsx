import { Navigate, Route, Routes } from "react-router-dom"
import ManageProfile from "./screens/ManageProfile"
import MainPage from "./screens/MainPage"



const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/home" element={<MainPage/>}/>
            <Route path="/profiles" element={<ManageProfile/>}/>
            <Route path="/" element={<Navigate replace to='/profiles'/>}/>
        </Routes>
    </div>
  )
}

export default App
