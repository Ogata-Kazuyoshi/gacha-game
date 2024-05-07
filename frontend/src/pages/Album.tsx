import styles from "./Album.module.scss"
import {useContext, useEffect} from "react";
import {ApplicationContext} from "../contexts/ApplicationContextProvider.tsx";
import card from "../../public/assets/images/common/card-template.png"

export const Album = () => {

    const {dataList,setDataList} = useContext(ApplicationContext)!

    useEffect(() => {
        const tempData = JSON.parse(JSON.stringify(dataList))
        dataList.forEach((elm,index)=>{
            const getLocalStorage = window.localStorage.getItem(`gachaList-${elm.titleNumber}`)
            if (!getLocalStorage) return
            const haveCard = getLocalStorage?.split("-")
            haveCard?.forEach((itemNumber)=>{
                const itemIndex = dataList[index].items.findIndex(elm2 => elm2.itemNumber === +itemNumber)
                tempData[index].items[itemIndex].isGet = true
            })
        })
        // console.log(tempData)
        setDataList(tempData)
    }, []);

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
                                <div className={`${item.isGet ? styles.alreadyGot : styles.notHaveGot}`}>
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