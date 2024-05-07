import styles from "./PopUp.module.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {SwipeEvent} from "./SwipeEvent.tsx";
import React, {useContext} from "react";
import {TouchDown} from "./TouchDown.tsx";
import card from "../../public/assets/images/common/card-template.png"
import {ApplicationContext} from "../contexts/ApplicationContextProvider.tsx";

type Props = {
    titleIndex:number,
    itemIndex:number,
    callBackFunc:()=>void
}

export const PopUp:React.FC<Props> = (props) => {

    const {dataList} = useContext(ApplicationContext)!


    return <div className={`${styles.popUpContainer} ${styles.slideInFromBottom}`}>
        <TouchDown callBackFunc={() => {
            props.callBackFunc()
        }}>
            <ArrowBackIosIcon/>
        </TouchDown>
        <div className={styles.cardContainer}>
            <div>
                <img src={card} alt="cardTemplate"/>
            </div>
            <SwipeEvent callBackFunc={() => {
                props.callBackFunc()
            }}>
                <div>{`${dataList[props.titleIndex].title}`}</div>
                <div>
                    <div>
                        <img src={dataList[props.titleIndex].items[props.itemIndex].src} alt="#"/>
                    </div>
                </div>
                <div>{`${dataList[props.titleIndex].items[props.itemIndex].name}`}</div>
            </SwipeEvent>
        </div>
    </div>

}