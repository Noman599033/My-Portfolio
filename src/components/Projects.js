import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import hireme from "../assets/img/hireme.png";
import posterbuilder from "../assets/img/posterbuilder.png";
import jobshunter from "../assets/img/jobshunter.png";
import kncafe from "../assets/img/kncafe.png";
import qhero from "../assets/img/qhero.png";
import aihub from "../assets/img/aihub.png";
import justice from "../assets/img/justice.png";
import bdcrops from "../assets/img/bdcrops.png";
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
    {
      title: "BDCrops",
      description: "BDCrops is a website where user can buy fresh crops and vegetables.",
      imgUrl: bdcrops,
      demoLink: "",
      CodeLink: "https://drive.google.com/drive/folders/1tGHe9G6-TM4xLCX3lVgJ1uslwyuyTW5W?usp=drive_link",
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
    {
      title: "Jobs Hunter",
      description: "The Jobs Hunter app is a user-friendly tool that allows users to help in finding job for users.",
      imgUrl: jobshunter,
      demoLink: "https://jolly-yeot-69ca78.netlify.app/",
      CodeLink: "",
    },
    {
      title: "Knowledge Cafe",
      description: "The Knowledge Cafe app is a user-friendly tool that allows users to easily bookmark the blog and user can easily count the reading time for bookmarked.",
      imgUrl: kncafe,
      demoLink: "https://knowledge-cafe-noman033.netlify.app/",
      CodeLink: "",
    },
    {
      title: "Quiz Hero",
      description: "The Quiz Hero app is a user-friendly tool that allows users to easily take quiz for time limit in 60 seconds.",
      imgUrl: qhero,
      demoLink: "https://b7a7-quiz-hero-noman599033.netlify.app/",
      CodeLink: "",
    },

  ];

  const othersProjects = [
    {
      title: "AI UNIVERSE HUB",
      description: "The AI UNIVERSE HUB app is a user-friendly tool that allows users to easily sort out the display",
      imgUrl: aihub,
      demoLink: "https://ai-universe-hub-noman033.netlify.app/",
      CodeLink: "",
    },
    {
      title: "Justice",
      description: "The Justice web page is a user-friendly page that allows users to easily find the consultant.",
      imgUrl: justice,
      demoLink: "https://legal-solution-noman599033.netlify.app/",
      CodeLink: "",
    },
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
                      <Nav.Link eventKey="first">PHP (Laravel)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Javascript (React)</Nav.Link>
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
