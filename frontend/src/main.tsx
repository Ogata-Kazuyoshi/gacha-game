import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ApplicationContextProvider} from "./contexts/ApplicationContextProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
        <ApplicationContextProvider>
            <App />
        </ApplicationContextProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
