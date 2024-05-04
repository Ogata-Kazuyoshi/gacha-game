// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useSound from "use-sound";
import Sound from "../../public/assets/sound/gatyagatya.mp3"
import data from "../data/data.json"
import Button from "@mui/material/Button";
import gachaBody from "../../public/assets/images/common/gachaBody.png"
import {useState} from "react";

export const Home = () => {
    // const [play, { stop, pause }] = useSound(Sound);
    const gacha = () =>{
        const firstIndex = Math.floor(Math.random()*data.dataList.length)
        const secondIndex = Math.floor(Math.random()*data.dataList[firstIndex].items.length)
        const currentData = window.localStorage.getItem(`gachaList-${data.dataList[firstIndex].titleNumber}`)
        let nextData = `${data.dataList[firstIndex].items[secondIndex].itemNumber}`
        if (currentData) {
            const splitData = currentData.split("-")
            if (!splitData.includes(nextData)) {
                nextData = `${currentData}-${nextData}`
            } else {
                nextData = currentData
            }
        }
        window.localStorage.setItem(`gachaList-${data.dataList[firstIndex].titleNumber}`,nextData)
        setTitleIndex(firstIndex)
        setItemIndex(secondIndex)
    }

    const [play] = useSound(Sound, {
        onend: gacha
    });
    const [titleIndex, setTitleIndex]= useState<number | null>(null)
    const [itemIndex, setItemIndex]= useState<number | null>(null)

    return (
        <>
            {(titleIndex !==null && itemIndex !==null) && <img src={`${data.dataList[titleIndex].items[itemIndex].src}`} alt="#"/>}

            <img src={gachaBody} alt="gachaBody"/>
            <Button
                variant="contained"
                color="success"
                onClick={() => {
                    play()
                }}
            >
                Push
            </Button>
        </>
    );
}