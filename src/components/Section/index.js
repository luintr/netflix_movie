import "./styles.scss";

import Container from "../Container";

const Section = ({ title, content, img, flex = "", ...props }) => {
    return (
        <section className="section">
            <Container className="inner">
                <div className="content-box">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>

                <div className="video-tv-box">
                    <img
                        src={img}
                        alt=""
                    />
                    {props.children}
                </div>
            </Container>
        </section>
    );
};

export default Section;
