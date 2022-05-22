import React, { ReactNode } from "react";
import styled from "@emotion/styled";
interface props {
    children: ReactNode;
    title: string;
    color: string;
}
const Wrapper = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 11,
    border: "4px solid black",
    filter: `drop-shadow(-4px 4px 0 black)`,
    overflow: "hidden",
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 700,
}));
const BodyContent = styled("div")(() => ({
    padding: 24,
    fontSize: 24,
}));

const TitleContainer = styled("div")(() => ({
    borderBottom: "4px solid black",
    padding: "12px 24px",
    fontSize: 18,
}));

const Window = ({ children, title, color }: props) => {
    return (
        <Wrapper>
            <TitleContainer style={{ backgroundColor: color }}>
                {title}
            </TitleContainer>
            <BodyContent>{children}</BodyContent>
        </Wrapper>
    );
};

export default Window;
