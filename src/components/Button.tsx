import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface ButtonInterface {
    children: ReactNode;
    tilted?: boolean;
    color: string;
    style?: object;
}

const Button = ({ children, color, tilted, style }: ButtonInterface) => {
    const Btn = styled("button")({
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 700,
        fontSize: "200%",
        margin: 0,
        padding: "1% 5%",
        border: "4px solid black",
        borderRadius: 8,
        backgroundColor: color,
        filter: `drop-shadow(-4px 4px 0 black)`,
        transform: ` ${tilted && "rotate(-5deg)"}`,
        cursor: "pointer",
        zIndex: 2,
        "&:hover": {
            transform: ` ${tilted && "rotate(5deg)"}`,
            filter: `drop-shadow(4px 4px 0 black)`,
        },
        transition: "200ms ease-out",
        userSelect: "none",
    });

    return <Btn style={style}>{children}</Btn>;
};

export default Button;
