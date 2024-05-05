import {swipeCheckService} from "../service/SwipeCheckService.ts";
import React, {ReactNode} from "react";

type Props = {
    callBackFunc:()=>void
    children:ReactNode
}

export const SwipeEvent:React.FC<Props> = (props) => {
    return (
        <div
            onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
                swipeCheckService.setTouchStartY(e.targetTouches[0].clientY)
            }}
            onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => {
                swipeCheckService.setTouchEndY(e.targetTouches[0].clientY)
            }}
            onTouchEnd={() => {
                if (swipeCheckService.compareStartWithEnd()) {
                    props.callBackFunc()
                }
            }}
        >
            {props.children}
        </div>
    )
}