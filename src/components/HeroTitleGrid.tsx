import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const HeroTitleGrid = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr",
    "&>h1": {
        fontFamily: "Rubik",
        textTransform: "uppercase",
        fontSize: "6.5vmin",
        padding: 0,
        margin: 0,
    },
    "&>.ringsWrapper": {
        position: "relative",
        paddingTop: "5em",
        gridColumnStart: 2,
        gridRow: "span 3",
        display: "flex",
        justifyContent: "center",
        "&>.rings": {
            position: "absolute",
            top: "2em",
            right: "5em",
        },
    },
    "&>.action": {
        padding: "2em 0",
        display: "flex",
        justifyContent: "center",
    },
}));

export default HeroTitleGrid;
