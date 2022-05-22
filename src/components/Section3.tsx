import ContentWrapper from "./ContentWrapper";
import SectionWrapper from "./SectionWrapper";
import styled from "@emotion/styled";
import Button from "./Button";
import rings from "../assets/footer_rings.svg";
import blob from "../assets/footer_blob.svg";
import "../styles/_blobs.scss";

const FlexBox = styled("div")(() => ({
    display: "flex",
    justifyContent: "spaced-evenly",
    flexDirection: "column",
    alignItems: "center",
    "&>h1": {
        fontSize: "6vw",
        fontFamily: "Rubik",
        fontWeight: 700,
        color: "#fff",
        textTransform: "uppercase",
        margin: 0,
        padding: 0,
    },
    "&>h2": {
        color: "#fff",
    },
    "&>div": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "35vw",
        gap: "2vw",
    },
}));

const Section3 = () => {
    return (
        <SectionWrapper bg="purp" padding="12em 0">
            <ContentWrapper>
                <FlexBox>
                    <h1>hartley's jewellery</h1>
                    <h2>where to find us!</h2>
                    <div>
                        <Button color="#F36FFF">ISNTAGRAM</Button>
                        <Button color="#FFAB6F">OUR ETSY</Button>
                    </div>
                </FlexBox>
            </ContentWrapper>
            <img src={blob} alt="blob" className="footer-blob" />
            <img src={rings} alt="rings" className="footer-rings" />
        </SectionWrapper>
    );
};

export default Section3;
