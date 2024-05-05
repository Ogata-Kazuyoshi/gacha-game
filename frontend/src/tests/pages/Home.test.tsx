import {vi} from "vitest";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// import useSound from "use-sound";

vi.mock("@mui/material/Button", () => {
    return {default: vi.fn(({onClick,children}) => {
        onClick && onClick()
          return  <button>{children}</button>
        })};
});

vi.mock("use-sound", () => ({
    default: vi.fn(() => [
        vi.fn(), // mock for play
        { stop: vi.fn(), pause: vi.fn() } // mock for stop and pause
    ])
}));



describe("Homeのテスト", () => {
    beforeEach(() => {
        vi.clearAllMocks(); // Clears any previous mocks before each test
    });
    describe("レンダーすると", () => {
        test("正しい要素が表示されている", () => {
            // render(<Home/>)
            //
            // expect(screen.getByAltText("gachaBody")).toHaveAttribute("src","/public/assets/images/common/gachaBody.png")

        })

        test("useSoundが正しい引数で呼び出されている", () => {
            // render(<Home/>);
            //
            // // useSoundが呼び出されたときの引数を検証
            // expect(vi.mocked(useSound).mock.calls[0][0]).toBe("/public/assets/sound/gatyagatya.mp3");
        });

        // test("Button要素のOnClickプロパティに設定されている関数を実行すると、useSoundのplayを呼ぶ", async () => {
        //     render(<Home/>);
        //
        //     const [play] = vi.mocked(useSound).mock.results[0].value;
        //     // 1. useSound はモックされており、その呼び出し結果が vi.mocked(useSound).mock.results 配列に保存されます。
        //     // 2. vi.mocked(useSound).mock.results[0].value は、useSound が最初に呼び出されたときに返された値（この場合は配列）を指します。
        //     // 3. const [play] = ... は、この配列から最初の要素（play 関数）を抽出しています。
        //     // const [play, controls] = vi.mocked(useSound).mock.results[0].value;
        //     // const { stop, pause } = controls;
        //     expect(play).toHaveBeenCalled();
        // });
    })
})