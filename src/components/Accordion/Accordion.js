import React from "react";
import dataAccor from "./dataAccor";
import "./accordion.scss";
import { Collapse } from 'antd';

const Accordion = () => {
  const { Panel } = Collapse;

  return (
    <React.Fragment>
      <div className="separate"></div>
      <div className="accordion">
        <div className="container">
          <Collapse accordion>
            {dataAccor.map((data) =>
              <Panel header={data.question} key={data.id}>
                <p>{data.answer}</p>
              </Panel>)}
          </Collapse> </div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
