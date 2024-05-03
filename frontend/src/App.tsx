import './App.css'
import {Route, Routes} from "react-router-dom";
import {AppCommon} from "./pages/AppCommon.tsx";
import {Home} from "./pages/Home.tsx";
import {Temp} from "./pages/Temp.tsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Temp/>}></Route>
          <Route path="app" element={<AppCommon/>}>
              <Route path="home" element={<Home/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
