import styles from "./Album.module.scss"
import {useContext} from "react";
import {ApplicationContext} from "../contexts/ApplicationContextProvider.tsx";
import card from "../../public/assets/images/common/card-template.png"

export const Album = () => {

    const {dataList} = useContext(ApplicationContext)!

    return (<div className={styles.albumArea}>
        <div>
            {dataList.map((title,titleIndex)=>{
                return (
                <div key={titleIndex} className={styles.eachTitleArea}>
                    <div>{title.title}</div>
                    <div className={styles.eachCardArea}>
                    {title.items.map((item,itemIndex)=>{
                        return (<div key={itemIndex}>
                            <img src={card} alt="card-template" />
                            <div>
                                <div>{item.name}</div>
                            </div>
                            <div>
                                <div>
                                    <img src={item.src} alt=""/>
                                </div>
                            </div>
                        </div>)
                    })}
                    </div>
                </div>)
            })}
        </div>
    </div>)
}