import ring from "../assets/hero_ring.svg";
import ringBlob from "../assets/hero_ringBlob.svg";
import Button from "./Button";
import blob from "../assets/hero_blob.svg";
import line from "../assets/hero_line.svg";
import Window from "./Window";
import SectionWrapper from "./SectionWrapper";
import ContentWrapper from "./ContentWrapper";
import HeroTitleGrid from "./HeroTitleGrid";
import "../styles/_blobs.scss";
import Grid from "./Grid";
import bubble from "../assets/hero_speechBubble.svg";
import recycle from "../assets/hero_recycle.svg";

const Section1 = () => {
    return (
        <SectionWrapper bg="green" padding="6em 0 12em 0">
            <ContentWrapper>
                <HeroTitleGrid>
                    <h1 style={{ zIndex: 2 }}>
                        hartley's jewellery.
                        <br />
                        custom, handcrafted &amp; eco friendly.
                    </h1>

                    <div className="ringsWrapper">
                        <img
                            src={ringBlob}
                            alt="Made from 100% recycled Stirling Silver!"
                        />
                        <img src={ring} alt="Ring" className="rings" />
                    </div>

                    <div className="action">
                        <Button
                            color="#FFFB93"
                            tilted={true}
                            style={{ zIndex: 2 }}
                        >
                            ORDER NOW
                        </Button>
                    </div>
                </HeroTitleGrid>
                <img src={blob} alt="blob" className="hero-blob" />
            </ContentWrapper>
            <img src={line} alt="line" style={{ marginBottom: "4em" }} />

            <ContentWrapper>
                <img src={bubble} alt="Speech Bubble" className="hero-bubble" />
                <img
                    src={recycle}
                    alt="Recycle Symbol"
                    className="hero-recycle"
                />
                <div className="hero-circle"></div>
                <ContentWrapper>
                    <Grid cols="1fr 4px 1fr" gap="2em">
                        <Window title="Testimonials" color="#FF93FB">
                            dasdasds
                        </Window>
                        <div
                            style={{
                                backgroundColor: "black",
                                gridRow: "span 2",
                                borderRadius: 8,
                            }}
                        ></div>
                        <div
                            style={{
                                gridRow: "span 2",
                            }}
                        >
                            <h2>OUR ETHOS</h2>
                            <p>
                                The jewelry industry is notorious for creating
                                high levels of carbon pollution, contributing to
                                greenhouse gas emissions and global warming.
                                <br />
                                <br />
                                <span>
                                    Which is why Hartley’s Jewellery works to
                                    lower our greens gas emissions by using 100%
                                    recycled stirling silver to craft all our
                                    pieces. We want happy customers and a happy
                                    planet.
                                </span>
                            </p>
                        </div>
                        <Button color="#FFEFC8" style={{ zIndex: 2 }}>
                            SEE OUR ETSY STORE!
                        </Button>
                    </Grid>
                </ContentWrapper>
            </ContentWrapper>
        </SectionWrapper>
    );
};

export default Section1;
