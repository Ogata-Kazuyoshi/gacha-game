import styles from './Home.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useSound from 'use-sound';
import Sound from '../../public/assets/sound/gatyagatya.mp3';
import data from '../data/data.json';
import gachaBody from '../../public/assets/images/common/gachaBody.png';
import gachaHandole from '../../public/assets/images/common/gachaHandle.png';
import { useState } from 'react';
import { PopUp } from '../components/PopUp.tsx';
import {TouchDown} from "../components/TouchDown.tsx";

export const Home = () => {
  // const [play, { stop, pause }] = useSound(Sound);
  const gacha = () => {
    const firstIndex = Math.floor(Math.random() * data.dataList.length);
    const secondIndex = Math.floor(
      Math.random() * data.dataList[firstIndex].items.length
    );
    const currentData = window.localStorage.getItem(
      `gachaList-${data.dataList[firstIndex].titleNumber}`
    );
    let nextData = `${data.dataList[firstIndex].items[secondIndex].itemNumber}`;
    if (currentData) {
      const splitData = currentData.split('-');
      if (!splitData.includes(nextData)) {
        const tempData = [...splitData];
        tempData.push(nextData);
        tempData.sort();
        nextData = tempData.join('-');
        // nextData = `${currentData}-${nextData}`
      } else {
        nextData = currentData;
      }
    }
    window.localStorage.setItem(
      `gachaList-${data.dataList[firstIndex].titleNumber}`,
      nextData
    );
    setTitleIndex(firstIndex);
    setItemIndex(secondIndex);
    setIsPopUp(true);
  };

  const [play] = useSound(Sound, {
    onend: gacha,
  });
  const [titleIndex, setTitleIndex] = useState<number | null>(null);
  const [itemIndex, setItemIndex] = useState<number | null>(null);
  const [isPopUp, setIsPopUp] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleButtonClick = (event: React.TouchEvent<HTMLImageElement>) => {
    event.preventDefault()
    play();
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); // アニメーションが終わったら状態をリセット
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <img src={gachaBody} alt="gachaBody" />
          <TouchDown callBackFunc={handleButtonClick}>
                <img
                  src={gachaHandole}
                  alt="gachaHandle"
                  className={rotate ? styles.rotateAnimation : ''}
                />
          </TouchDown>
      </div>
      {isPopUp && titleIndex !== null && itemIndex !== null && (
        <PopUp
          titleIndex={titleIndex}
          itemIndex={itemIndex}
          setIsPopup={setIsPopUp}
        />
      )}
    </>
  );
};
