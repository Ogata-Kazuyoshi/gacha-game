import {render} from "@testing-library/react";
import App from "./App.tsx";
import {BrowserRouter, Outlet} from "react-router-dom";
import {vi} from "vitest";
import {AppCommon} from "./pages/AppCommon.tsx";
import {Home} from "./pages/Home.tsx";
import {Album} from "./pages/Album.tsx";
import {Setting} from "./pages/Setting.tsx";

vi.mock("./pages/AppCommon.tsx")
vi.mock("./pages/Home.tsx")
vi.mock("./pages/Album.tsx")
vi.mock("./pages/Setting.tsx")
// vi.mock("react-router-dom", ()=>{
//     const actual =  vi.importActual("react-router-dom")
//     return {
//         ... (actual),
//         useNavigate: vi.fn()
//     }
// })



describe('App.tesxのテスト',()=>{
    // describe("レンダーした時",()=>{
    //     test("/にアクセスするとnavigateに正しい引数を渡して呼ぶ",()=>{
    //         const spyNavigate = vi.fn()
    //         vi.mocked(useNavigate).mockReturnValue(spyNavigate)
    //
    //         render(<App/>)
    //
    //         expect(useNavigate).toHaveBeenCalled()
    //         expect(spyNavigate).toHaveBeenCalledWith("/app/home")
    //     })
    // })
    afterEach(()=>{
        vi.restoreAllMocks()
    })
    describe("routerに関して",()=>{
        test('/appにアクセスするとAppcommonコンポーネントが呼ばれる',()=>{
            AppRender("/app")

            expect(AppCommon).toHaveBeenCalled()
        })
        test('/app/homeにアクセスするとHomeコンポーネントが呼ばれる',()=>{
            vi.mocked(AppCommon).mockReturnValue(<Outlet />)

            AppRender("/app/home")

            expect(Home).toHaveBeenCalled()
        })
        test("/app/albumにアクセスするとAlbumコンポーネントが呼ばれる",()=>{
            vi.mocked(AppCommon).mockReturnValue(<Outlet />)

            AppRender("/app/album")

            expect(Album).toHaveBeenCalled()
        })
        test("/app/settingにアクセスするとAlbumコンポーネントが呼ばれる",()=>{
            vi.mocked(AppCommon).mockReturnValue(<Outlet />)

            AppRender("/app/setting")

            expect(Setting).toHaveBeenCalled()
        })

    })
})

const AppRender = (url:string) => {
    window.history.pushState({}, "", url)
    render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}
