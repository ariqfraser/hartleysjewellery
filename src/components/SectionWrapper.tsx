import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const Wrapper = styled("div")(() => ({
    height: "auto",
    width: "100vw",
    margin: 0,
    padding: "5em 0",
    position: "relative",
    overflow: "hidden",
}));

interface SectionInterface {
    children: ReactNode;
    bg: string;
    padding?: string;
}
/*
$bg-green: inear-gradient(90deg, #B4E6BE 0%, #85D194 100%);
$bg-yellow: #FFEFC8;
$bg-purple: linear-gradient(90deg, #816EF5 0%, #A496FA 100%);
*/

const color = {
    green: "linear-gradient(90deg, #B4E6BE 0%, #85D194 100%)",
    yellow: "#FFEFC8",
    purple: "linear-gradient(90deg, #816EF5 0%, #A496FA 100%)",
};

const SectionWrapper = ({ children, bg, padding }: SectionInterface) => {
    return (
        <Wrapper
            style={{
                background:
                    bg === "green"
                        ? color.green
                        : bg === "yellow"
                        ? color.yellow
                        : color.purple,
                padding: padding,
            }}
        >
            {children}
        </Wrapper>
    );
};

export default SectionWrapper;
