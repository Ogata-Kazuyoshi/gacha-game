import {Outlet} from "react-router-dom";
import {BottomNavigation} from "../components/BottomNavigation.tsx";

export const AppCommon = () => {
    return <>
        <Outlet/>
        <BottomNavigation/>
    </>
}    