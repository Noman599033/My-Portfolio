
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import {Col, Row} from "react-bootstrap";
import {skills, skillsFramework, skillsDB} from "../content_option";
import React from "react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in HTML, C, Java, Python, JavaScript, and PHP, with experience in MySQL, MSSQL, and MongoDB,<br></br> I specialize in web development. Skilled in Laravel and ReactJS frameworks, I create dynamic applications. <br></br> Additionally, I'm adept at using Microsoft Office Word, Jasper Studio, and Adobe Software for project management <br></br> and content creation. With strong presentation skills, I effectively communicate complex ideas. <br></br> Ready to tackle diverse challenges with a passion for continuous learning.</p>

                        <Row className="sec_sp">
                            <Col lg="5">
                                <h3 className="color_sec py-4">Programming Language</h3>
                            </Col>
                            <Col lg="7">
                                {skills.map((data, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">{data.value}%</div>
                                                <div className="progress-name">{data.name}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Col>
                        </Row>
                        <Row className="sec_sp">
                            <Col lg="5">
                                <h3 className="color_sec py-4">Framework</h3>
                            </Col>
                            <Col lg="7">
                                {skillsFramework.map((data, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">{data.value}%</div>
                                                <div className="progress-name">{data.name}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Col>
                        </Row>
                        <Row className="sec_sp">
                            <Col lg="5">
                                <h3 className="color_sec py-4">Database</h3>
                            </Col>
                            <Col lg="7">
                                {skillsDB.map((data, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">{data.value}%</div>
                                                <div className="progress-name">{data.name}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
