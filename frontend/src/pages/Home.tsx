// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useSound from "use-sound";
import Sound from "../assets/sound/gatyagatya.mp3"

export const Home = () => {
    const [play, { stop, pause }] = useSound(Sound);

    return (
        <>
            <button onClick={() => play()}>音を鳴らす</button>
            <button onClick={() => stop()}>停止</button>
            <button onClick={() => pause()}>ポーズ</button>
        </>
    );
}