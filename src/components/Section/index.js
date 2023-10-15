import "./styles.scss";

import Container from "../Container";

const Section = ({ title = "", content = "", img = "", flex = "", ...props }) => {
    return (
        <section className="section">
            <Container className={`inner ${flex}`}>
                {title !== "" ? (
                    <div className="content-box">
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                ) : null}

                <div className="video-tv-box">
                    {img !== "" ? (
                        <img
                            src={img}
                            alt=""
                        />
                    ) : null}
                    {props.children}
                </div>
            </Container>
        </section>
    );
};

export default Section;
