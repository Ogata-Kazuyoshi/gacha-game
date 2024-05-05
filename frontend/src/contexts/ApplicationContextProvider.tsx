import { createContext, ReactNode, useState } from "react"

export type ApplicationContextValue = Readonly<{
   selectData: [number|null, number|null]
    setSelectData:(data:[number | null,number | null])=>void
}>

export const ApplicationContext = createContext<ApplicationContextValue | null>(null)

type Props = Readonly<{ children: ReactNode }>
export const ApplicationContextProvider: React.FC<Props> = ({ children }) => {

    const [selectData, setSelectData] = useState<[number | null,number | null]>([null,null])

    return (
        <ApplicationContext.Provider
            value={{
               selectData,
                setSelectData
            }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}
