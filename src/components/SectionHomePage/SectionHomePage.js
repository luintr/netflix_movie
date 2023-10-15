import "./sectionHomePage.scss";

const SectionHomePage = ({ title, content, img, flex = "", ...props }) => {
    return (
        <div className="section-homepage-wrapper">
            <div className="separate"></div>

            <div className={`section-wrapper`}>
                <section className={`container section ${flex}`}>
                    <div className="content-box">
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>

                    <div className="video-tv-box">
                        <img
                            src={img}
                            alt="tivi"
                        />
                        {props.children}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SectionHomePage;
