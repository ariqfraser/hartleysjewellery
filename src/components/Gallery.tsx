import React, { ReactNode, useEffect, useState } from "react";
import styled from "@emotion/styled";
import imgs from "../assets/galleryImgs";

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
    position: "relative",
}));
const BodyContent = styled("div")(() => ({
    padding: "24px",
    display: "flex",
    width: "inherit",
    minHeight: 304,
    alignItems: "center",
    justifyContent: "center",
}));

const TitleContainer = styled("div")(() => ({
    borderBottom: "4px solid black",
    padding: "12px 24px",
    fontSize: 18,
}));

const FooterContainer = styled("div")(() => ({
    borderTop: "4px solid black",
    padding: "12px 24px",
    fontSize: 18,

    bottom: 0,
    width: "inherit",
    display: "flex",
    "&>#rightBtn": {
        marginLeft: "auto",
    },
}));

const Grid = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 146px)",
    gap: 12,
}));

interface props {
    color: string;
}

const Gallery = ({ color }: props) => {
    const [page, setPage] = useState(0);
    const nImages = imgs.length;
    const maxPage = Math.ceil(nImages / 6) - 1;

    function handlePageChange(change: number) {
        if (page === maxPage && change > 0) return;
        if (page === 0 && change < 0) return;
        setPage(page + change);
    }

    useEffect(() => {
        console.log("page =>", page);
    }, [page]);

    return (
        <Wrapper>
            <TitleContainer style={{ backgroundColor: color }}>
                GALLERY
            </TitleContainer>
            <BodyContent>
                <Grid>
                    {imgs.map((v, i) => {
                        if (i >= page * 6 && i < page * 6 + 6)
                            return (
                                <img
                                    src={v.thumb}
                                    alt={v.alt}
                                    key={"img " + i}
                                    style={{ justifyItems: "center" }}
                                />
                            );
                    })}
                </Grid>
            </BodyContent>
            <FooterContainer>
                {page === 0 || (
                    <button onClick={() => handlePageChange(-1)}>Left</button>
                )}
                {page === maxPage || (
                    <button onClick={() => handlePageChange(1)} id="rightBtn">
                        Right
                    </button>
                )}
            </FooterContainer>
        </Wrapper>
    );
};

export default Gallery;
