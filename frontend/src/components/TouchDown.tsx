// import {ReactNode} from "react";
//
// type Props = {
//     callBackFunc: (e: React.TouchEvent<HTMLImageElement>) => void
//     children: ReactNode
// }
//
// export const TouchDown: React.FC<Props> = (props) => {
//     return (
//         <div
//             onTouchStart={props.callBackFunc}
//         >
//             {props.children}
//         </div>
//     )
// }

import React, { ReactNode, useRef, useEffect } from "react";

type Props = {
    callBackFunc: () => void;
    children: ReactNode;
};

export const TouchDown: React.FC<Props> = (props) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = divRef.current;
        if (div) {
            const handleTouchStart = (event: TouchEvent) => {
                event.preventDefault();
                props.callBackFunc();
            };

            div.addEventListener('touchstart', handleTouchStart, { passive: false });
            return () => {
                div.removeEventListener('touchstart', handleTouchStart);
            };
        }
    }, [props.callBackFunc]);

    return (
        <div ref={divRef}>
            {props.children}
        </div>
    );
};