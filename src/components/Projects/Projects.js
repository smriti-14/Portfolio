import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import images from "../../Assets/Projects/images.jpeg";
import icon from "../../Assets/Projects/icon.jpg";
import ruralrise from "../../Assets/Projects/ruralrise.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images}
              isBlog={false}
              title="Learnify"
              description="Built an e-learning platform offering personalized learning experiences and user growth tracking. Utilized Angular, Node.js, PostgreSQL, and AWS for seamless functionality and scalability. Integrated AI with Python Flask and deployed the platform using Docker and Kubernetes. "
              ghLink="https://github.com/smriti-14/Learnify"
              demoLink="https://drive.google.com/file/d/1tu-AGdX_l5k92w-V8hye-9FMptWwivEs/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icon}
              isBlog={false}
              title="Smart-Car-Maintenance"
              description=" A mobile application developed to help users keep track of their vehicle's maintenance.  Built with React Native and Expo, the app allows users to log maintenance details, set reminders for upcoming services, and maintain an organized record of their vehicle's performance."
              ghLink="https://github.com/smriti-14/smart-car-maintenance-tracker"
              demoLink="https://drive.google.com/file/d/1pJ9UQdQwktH-ODr7hA8K3MJ2_VbWpYIj/view?usp=sharing"
              // imgStyle={{ width: "80%", height: "40%" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ruralrise}
              isBlog={false}
              title="Rural Rise"
              description="Developed a centralized platform to aggregate and analyze agricultural data from government sources using HTML/CSS, Node.js, MongoDB, and Express. Secured 10th position in the Smart India Hackathon (SIH) 2023 college round and was recognized for its innovative approach."
              ghLink="https://github.com/OctoCat-r/AutoBots"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here  */}
            {/* />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
