import { useState } from "react";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./styles/_globals.scss";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Nav />
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
}

export default App;
