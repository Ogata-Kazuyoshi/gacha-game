import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import {AppCommon} from "./pages/AppCommon.tsx";
import {Home} from "./pages/Home.tsx";
import {useEffect} from "react";
import {Album} from "./pages/Album.tsx";
import {Setting} from "./pages/Setting.tsx";

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/app/home")
        }
    }, [navigate, location.pathname])

  return (
    <>
      <Routes>
          <Route path="app" element={<AppCommon/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="album" element={<Album/>}/>
              <Route path="setting" element={<Setting/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
