import data from "../data/data.json"
import {useNavigate} from "react-router-dom";

export const Setting = () => {

    const navigate = useNavigate()
    const removeLocalstorage = () => {
        data.dataList.forEach((elm)=>{
            window.localStorage.removeItem(`gachaList-${elm.titleNumber}`)
        })
    }

    return <>
    <div>
        <button onClick={removeLocalstorage}>でーたをけす</button>
        <button onClick={()=>{navigate("/app/itemList")}}>ItemListへいく</button>
    </div>
    </>
}