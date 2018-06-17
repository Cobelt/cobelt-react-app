import React, { Component } from 'react';

import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import { projectList } from '../../assets/fake_DB/projects';

import '../../styles/Projects.css';

class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      importantSize: props.importantSize || 12,
      mediumScreenSize: props.mediumScreenSize || 6,
      imagesHeight: props.imagesHeight || '20rem',
      projects: projectList,
    };
  }

  renderCard(project) {
    return (
      <Card className="project-item show-something-over-on-hover">
        <div className="something-to-show background-circle">
          <span className="sub-item">Go !</span>
        </div>
        <a className="no-decorations-link" href={project.route}>

          <div className="img-container" style={{height: this.state.imagesHeight,}}>
            <CardImg top width="100%" src={project.imgSrc} alt="Card image cap"/>
          </div>

          <CardBody className="text-center">
            <CardTitle>
              <strong>{project.title}</strong>
            </CardTitle>
            <CardText>
              {project.desc}
            </CardText>
          </CardBody>

        </a>
      </Card>
    );
  }

  renderList() {
    return this.state.projects.map(project => {
      return (
        <Col key={project.id + '/' + project.imgSrc}
             className="margin-bottom percent-5" sm={12}
             md={project.isImportant ? this.state.importantSize : this.state.mediumScreenSize}>

          { this.renderCard(project) }

        </Col>
      );
    });
  };

  render() {
    return (
      <Container className="margin-top percent-2">
        <Row>
          { this.renderList() }
        </Row>
      </Container>
    );
  };
}

export default ProjectsList;