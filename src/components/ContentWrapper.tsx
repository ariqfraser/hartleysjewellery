import styled from "@emotion/styled";

interface props {
    padding?: string;
}

const ContentWrapper = styled("div")(({ padding }: props) => ({
    position: "inherit",
    width: "min(80%, 1400px)",
    marginInline: "auto",
    padding: padding,
}));

export default ContentWrapper;
