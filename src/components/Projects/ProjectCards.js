import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {

  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.play();
  };

  return (
    <Card className="project-card-view">
      {props.videoPath ?
        <video
          ref={videoRef}
          className="card-img-top"
          autoPlay
          muted
          controls
          onEnded={handleVideoEnded}>
          <source src={props.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        :
        <>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </>
      }

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} >
          <span dangerouslySetInnerHTML={{ __html: props.description }} />
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
