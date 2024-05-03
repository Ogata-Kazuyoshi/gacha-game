import {render} from "@testing-library/react";
import App from "./App.tsx";
import {BrowserRouter, Outlet} from "react-router-dom";
import {vi} from "vitest";
import {AppCommon} from "./pages/AppCommon.tsx";
import {Home} from "./pages/Home.tsx";

vi.mock("./pages/AppCommon.tsx")
vi.mock("./pages/Home.tsx")

describe('App.tesxのテスト',()=>{
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
