import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import {
  dataabout,
  worktimeline,
} from "../../content_option";

export const About = () => {
  return (
      <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Myself</h2>
              <Row className="sec_sp">
                <Col className="abtpic" lg="5">
                  <div className="abtPicBox"></div>
                </Col>
                <Col lg="7" className="d-flex align-items-center">
                  <div>
                    <p className="abtmeTxt">{dataabout.aboutme}</p>
                  </div>
                </Col>
              </Row>
              <Row className=" sec_sp">
                <Col lg="5">
                  <h3 className="color_sec py-4">Work Timeline</h3>
                </Col>
                <Col lg="7">
                  <table className="table caption-top">
                    <tbody>
                      {worktimeline.map((data, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{data.jobtitle}</th>
                            <td>{data.where}</td>
                            <td>{data.date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};
