import data from "../data/data.json"

export const Setting = () => {

    const removeLocalstorage = () => {
        data.dataList.forEach((elm)=>{
            window.localStorage.removeItem(`gachaList-${elm.titleNumber}`)
        })
    }

    return <>
    <div>
        <button onClick={removeLocalstorage}>でーたをけす</button>
    </div>
    </>
}