import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Model Scalar Engine",
      github_url: "https://github.com/buttafraz22/ModelScalarEngine",
      description: 'A three dimensional object renderer engine in Pygame.'
    },
    {
        title: "Cars Details Platform",
        github_url: "https://gitlab.com/buttafraz22/cs261f22pid01",
        description: 'Cars Platform using integrated web scrapping.'
    },
    {
        title: "Distribution Management System",
        github_url: "https://gitlab.com/buttafraz22/cs261f22finalpid01",
        description: 'A distribution management system having integrated Google Maps API.'
    },
    {
        title: "ConResult- OBE Student Management",
        github_url: "https://gitlab.com/buttafraz22/2021-cs-12-database-mid-project",
        description: 'An Outcome Base Education Management System.'
    },
    {
        title: "Spotify Clone",
        github_url: "https://github.com/buttafraz22/spotify_clone_Afraz",
        description: 'Self explanatory.'
    },
    {
        title: "Web based Piano",
        github_url: "https://github.com/buttafraz22/Afraz_piano",
        description: 'Self Explanatory.'
    },
  ];

  const projectsPage2 = [
    {
      title: "Model Scalar Engine",
      github_url: "https://github.com/buttafraz22/ModelScalarEngine",
      description: 'A three dimensional object renderer engine in Pygame.'
    },
    {
        title: "Cars Details Platform",
        github_url: "https://gitlab.com/buttafraz22/cs261f22pid01",
        description: 'Cars Platform using integrated web scrapping.'
    },
    {
        title: "Distribution Management System",
        github_url: "https://gitlab.com/buttafraz22/cs261f22finalpid01",
        description: 'A distribution management system having integrated Google Maps API.'
    },
    
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav className="nav-pills mb-5 justify-content-center align-items-center flex-row" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                                )
                            })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsPage2.map((projectsPage2, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...projectsPage2}
                                />
                                )
                            })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
