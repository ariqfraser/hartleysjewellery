import styled from "@emotion/styled";
import { ReactNode } from "react";

interface props {
    children: ReactNode;
    cols: string;
    gap?: string;
}

const Grid = ({ children, cols, gap }: props) => {
    const CustomGrid = styled("div")(() => ({
        display: "grid",
        gridTemplateColumns: cols,
        gap: gap,
    }));
    return <CustomGrid>{children}</CustomGrid>;
};

export default Grid;
