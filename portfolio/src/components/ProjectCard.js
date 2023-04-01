import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, github_url,description}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span><a href={github_url} target="_blank" rel="noopener noreferrer"> Github URL</a> <br/> {description}</span>
        </div>
      </div>
    </Col>
  )
}