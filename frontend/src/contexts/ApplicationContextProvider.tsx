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
        setDataList(data.dataList)
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
