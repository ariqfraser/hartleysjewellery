import styled from "@emotion/styled";

const Wrapper = styled("nav")(() => ({
    zIndex: 50,
    display: "flex",
    position: "sticky",
    top: 0,
    width: "min(95%, 1400px)",
    marginInline: "auto",
    fontFamily: "Rubik",
}));

const LinkWrapper = styled("div")(() => ({
    backgroundColor: "rgba(255,255,255, 1)",
    display: "flex",
    alignItems: "center",
    padding: 24,
    position: "absolute",
    "&>a": {
        fontSize: "1.2em",
        marginRight: 24,
        "&:last-of-type": { marginRight: 0 },
        textDecoration: "none",
        color: "black",
    },
    marginTop: 4,
    borderRadius: 8,
    border: "4px solid black",
    filter: "drop-shadow(-4px 4px 0 black)",
}));

const Logo = styled("button")(() => ({
    margin: 0,
    padding: "18px 24px 24px 24px",
    fontSize: "1.5em",
    border: "none",
    fontFamily: "inherit",
    backgroundColor: "#000000",
    color: "white",
    position: "relative",
    marginLeft: "auto",
    "&::after": {
        position: "absolute",
        content: '""',
        width: "78%",
        height: "4px",
        marginLeft: "11%",
        borderRadius: "3em",
        backgroundColor: "white",
        zIndex: 5,
        top: "80%",
        left: 0,
    },
}));

const Nav = () => {
    return (
        <Wrapper>
            <LinkWrapper>
                <a href="#">OUR JEWELLERY</a>
                <a href="#">ABOUT US</a>
                <a href="#">GALLERY</a>
                <a href="#">SHOP</a>
            </LinkWrapper>
            <Logo className="">H. JEWELLERY</Logo>
        </Wrapper>
    );
};

export default Nav;
