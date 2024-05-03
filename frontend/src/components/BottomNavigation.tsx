import styles from "./BottomNavigation.module.scss"

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const BottomNavigation = () => {
    const [isHome, setIsHome] = useState(false)
    const [isAlbum, setIsAlbum] = useState(false)
    const [isSetting, setIsSetting] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        switch (location.pathname) {
            case "/app/home":
                setIsHome(true)
                setIsAlbum(false)
                setIsSetting(false)
                break;
            case "/app/album":
                setIsHome(false)
                setIsAlbum(true)
                setIsSetting(false)
                break;
            case "/app/setting":
                setIsHome(false)
                setIsAlbum(false)
                setIsSetting(true)
                break;
            default:
                setIsHome(false)
                setIsAlbum(false)
                setIsSetting(false)
        }
    }, [location.pathname])
    return <>
        <div className={styles.bottomNavContainer}>
            <div onClick={()=> {navigate("/app/home")}}>
                {isHome ? <HomeIcon /> : <HomeOutlinedIcon/> }
            </div>
            <div onClick={()=> {navigate("/app/album")}}>
                {isAlbum ? <PhotoLibraryIcon /> : <PhotoLibraryOutlinedIcon/> }
            </div>
            <div onClick={()=> {navigate("/app/setting")}}>
                {isSetting ? <SettingsIcon/> : <SettingsOutlinedIcon/> }
            </div>
        </div>
    </>
}