import "./styles.scss";
import React from "react";

import { CONTENT } from "../../constant";
import { Collapse } from "antd";
import Section from "../Section";

const Accordion = () => {
    const { Panel } = Collapse;

    return (
        <Section>
            <div className="accordion">
                <Collapse accordion>
                    {CONTENT.HOME.map((data) => (
                        <Panel
                            header={data.question}
                            key={data.id}
                        >
                            <p>{data.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </Section>
    );
};

export default Accordion;
