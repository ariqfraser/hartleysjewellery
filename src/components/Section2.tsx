import ContentWrapper from "./ContentWrapper";
import Gallery from "./Gallery";
import Grid from "./Grid";
import SectionWrapper from "./SectionWrapper";
import Window from "./Window";
import photo from "../assets/gallery_img.svg";
import camera from "../assets/gallery_camera.svg";
import ghost from "../assets/gallery_ghost.svg";
import blob from "../assets/gallery_blob.svg";
import "../styles/_blobs.scss";

const Section2 = () => {
    return (
        <SectionWrapper bg="yellow" padding="2em 0 6em 0">
            <img src={ghost} alt="Wow cool rings!" className="gallery-ghost" />
            <img src={photo} alt="Images" className="gallery-photo" />
            <img src={camera} alt="Camera Image" className="gallery-camera" />
            <img src={blob} alt="Camera Image" className="gallery-blob" />
            <ContentWrapper>
                <h2>The proof is in the pudding... or jewellery?</h2>
                <ContentWrapper padding="2em 2em">
                    <Grid cols="1fr 1fr" gap="2em">
                        <Window
                            title="HANDCRAFTED IN EDINBURGH, UK"
                            color="#FFFB93"
                        >
                            All of our jewellery is handcrafted in Edinburgh,
                            Scotland. And, when you order from us, you’ll
                            recieve your new jewels in plastic-free, recyclable
                            material.
                        </Window>
                        <Gallery color="#93FF9D" />
                    </Grid>
                </ContentWrapper>
            </ContentWrapper>
        </SectionWrapper>
    );
};

export default Section2;
