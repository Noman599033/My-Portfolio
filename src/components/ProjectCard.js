import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl,CodeLink, demoLink }) => {

    const handleCodeLinkClick = () => {
        window.open(CodeLink, '_blank');
    };
    const handleDemoClick = () => {
        window.open(demoLink, '_blank');
    };


  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    <div className="projBtnDiv">
        <button className="projBtn" onClick={handleCodeLinkClick}>Code Link</button>
        <button className="projBtn" onClick={handleDemoClick}>Demo</button>
    </div>
    </Col>
  )
}
