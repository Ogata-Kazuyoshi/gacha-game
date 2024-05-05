import styles from "./PopUp.module.scss"
import data from "../data/data.json";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {swipeCheckService} from "../service/SwipeCheckService.ts";

type Props = {
    titleIndex:number,
    itemIndex:number,
    setIsPopup:(isPopup:boolean)=>void
}

export const PopUp:React.FC<Props> = (props) => {


    return <div className={`${styles.popUpContainer} ${styles.slideInFromBottom}`}>
        <ArrowBackIosIcon
            onClick={()=>{props.setIsPopup(false)}}
        ></ArrowBackIosIcon>
        <div
            onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
               swipeCheckService.setTouchStartY(e.targetTouches[0].clientY)
            }}
            onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => {
                swipeCheckService.setTouchEndY(e.targetTouches[0].clientY)
            }}
            onTouchEnd={() => {
                if (swipeCheckService.compareStartWithEnd()) {
                    props.setIsPopup(false)
                }
            }}
        >
            <div>{`${data.dataList[props.titleIndex].title}`}</div>
            <div>
                <img src={data.dataList[props.titleIndex].items[props.itemIndex].src} alt="#"/>
            </div>
            <div>{`${data.dataList[props.titleIndex].items[props.itemIndex].name}`}</div>
        </div>
    </div>
}