import {ReactNode} from "react";

type Props = {
    callBackFunc: (e: React.TouchEvent<HTMLImageElement>) => void
    children: ReactNode
}

export const TouchDown: React.FC<Props> = (props) => {
    return (
        <div
            onTouchStart={props.callBackFunc}
            onTouchStartCapture={(event) => event.preventDefault()}
        >
            {props.children}
        </div>
    )
}