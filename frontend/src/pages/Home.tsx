import styles from './Home.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useSound from 'use-sound';
import Sound from '../../public/assets/sound/gatyagatya.mp3';
import data from '../data/data.json';
import gachaBody from '../../public/assets/images/common/gachaBody.png';
import gachaHandole from '../../public/assets/images/common/gachaHandle.png';
import {useContext, useState} from 'react';
import { PopUp } from '../components/PopUp.tsx';
import {TouchDown} from "../components/TouchDown.tsx";
import {ApplicationContext} from "../contexts/ApplicationContextProvider.tsx";

export const Home = () => {

  const {selectData} = useContext(ApplicationContext)!
  const gacha = () => {
    let firstIndex:number
    let secondIndex:number
    if (selectData[0] !== null && selectData[1] !==null ) {
      firstIndex = selectData[0]
      secondIndex = selectData[1]
    } else {
      firstIndex = Math.floor(Math.random() * data.dataList.length);
      secondIndex = Math.floor(
          Math.random() * data.dataList[firstIndex].items.length
      );
    }
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

  // const [play, { stop, pause }] = useSound(Sound);
  const [play] = useSound(Sound, {
    onend: gacha,
  });
  const [titleIndex, setTitleIndex] = useState<number | null>(null);
  const [itemIndex, setItemIndex] = useState<number | null>(null);
  const [isPopUp, setIsPopUp] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleButtonClick = () => {
    play();
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); // アニメーションが終わったら状態をリセット
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <div>
          <img src={gachaBody} alt="gachaBody" />
            <TouchDown callBackFunc={handleButtonClick}>
                  <img
                    src={gachaHandole}
                    alt="gachaHandle"
                    className={rotate ? styles.rotateAnimation : ''}
                  />
            </TouchDown>

        </div>
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
