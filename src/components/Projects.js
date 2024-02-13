import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import hireme from "../assets/img/hireme.png";
import posterbuilder from "../assets/img/posterbuilder.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const phpProjects = [
    {
      title: "HireMe",
      description: "Hire Me is a website which provide vehicles without drivers for some days. People can also provide their unused vehicles for rent. It’s implemented by using HTML, CSS, PHP, JavaScript.",
      imgUrl: hireme,
      demoLink: "https://noman599033.github.io/hire-me/",
      CodeLink: "https://github.com/Noman599033/hire-me",
    },
  ];

  const jsProjects = [
    {
      title: "Poster Builder",
      description: "The Poster Builder app is a user-friendly tool that allows users to easily create customized posters. Users can add headers, images, and descriptions, and then download the final design as an image file. With a simple interface and customizable options, it's perfect for both beginners and professionals looking to create visually appealing posters without any hassle.",
      imgUrl: posterbuilder,
      demoLink: "https://noman599033.github.io/Poster-Builder/",
      CodeLink: "https://github.com/Noman599033/Poster-Builder",
    },

  ];

  const othersProjects = [

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Explore My Projects</h2>
                <p>Embark on a journey through my meticulously crafted developer projects, spanning web applications, software solutions, and innovative creations, each reflecting my expertise and dedication to excellence.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">PHP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Javascript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          phpProjects.map((phpProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...phpProjects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          jsProjects.map((jsProjects, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...jsProjects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          othersProjects.map((othersProjects, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...othersProjects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
