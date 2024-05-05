import styles from "./PopUp.module.scss"
import data from "../data/data.json";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {SwipeEvent} from "./SwipeEvent.tsx";
import React from "react";
import {TouchDown} from "./TouchDown.tsx";

type Props = {
    titleIndex:number,
    itemIndex:number,
    setIsPopup:(isPopup:boolean)=>void
}

export const PopUp:React.FC<Props> = (props) => {


    return <div className={`${styles.popUpContainer} ${styles.slideInFromBottom}`}>
        <TouchDown callBackFunc={()=>{props.setIsPopup(false)}}>
            <ArrowBackIosIcon/>
        </TouchDown>
        <SwipeEvent callBackFunc={()=>{props.setIsPopup(false)}}>
            <div>{`${data.dataList[props.titleIndex].title}`}</div>
            <div>
                <img src={data.dataList[props.titleIndex].items[props.itemIndex].src} alt="#"/>
            </div>
            <div>{`${data.dataList[props.titleIndex].items[props.itemIndex].name}`}</div>
        </SwipeEvent>
        </div>
}