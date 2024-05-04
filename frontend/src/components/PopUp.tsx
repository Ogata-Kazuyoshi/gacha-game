import styles from "./PopUp.module.scss"
import data from "../data/data.json";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
        <div>
            <div>{`${data.dataList[props.titleIndex].title}`}</div>
            <div>
                <img src={data.dataList[props.titleIndex].items[props.itemIndex].src} alt="#"/>
            </div>
            <div>{`${data.dataList[props.titleIndex].items[props.itemIndex].name}`}</div>
        </div>
    </div>
}