import {createContext, ReactNode, useEffect, useState} from "react"
import data from "../data/data.json"



type Title = {
    title:string,
    titleNumber:number,
    items: Item[]
}

type Item = {
    itemNumber:number,
    name:string,
    src:string
    isGet:boolean
}


export type ApplicationContextValue = Readonly<{
   selectData: [number|null, number|null]
    setSelectData:(data:[number | null,number | null])=>void
    dataList:Title[],
    setDataList:(data:Title[])=>void
}>

export const ApplicationContext = createContext<ApplicationContextValue | null>(null)

type Props = Readonly<{ children: ReactNode }>
export const ApplicationContextProvider: React.FC<Props> = ({ children }) => {

    const [selectData, setSelectData] = useState<[number | null,number | null]>([null,null])
    const [dataList, setDataList] = useState<Title[]>(data.dataList)

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

    return (
        <ApplicationContext.Provider
            value={{
               selectData,
                setSelectData,
                dataList,
                setDataList
            }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}
