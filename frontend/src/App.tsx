import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import {AppCommon} from "./pages/AppCommon.tsx";
import {Home} from "./pages/Home.tsx";
import {useEffect} from "react";

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
          </Route>
      </Routes>
    </>
  )
}

export default App
