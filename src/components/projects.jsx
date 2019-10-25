import React from 'react';
import {Container , Jumbotron, Row, Col, Table, ProgressBar, Card, CardGroup, ListGroup } from 'react-bootstrap';
import success from '../success.jpg';
export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div style={{backgroundImage:`url(${success})`, backgroundSize:'cover'}}>
                <Container fluid={true} style={{width:'30%'}}>
                    <h2>Digital Badges</h2>
                    <iframe src="https://api.badgr.io/public/assertions/FwKLvMiuQsS_4jxMg2aScg?embedVersion=1&amp;embedWidth=330&amp;embedHeight=186" title="Badge: Cisco Cybersecurity Essentials" style={{width: '330px', height: '186px',border:'0px',alignContent:'center' }}></iframe>

                    
                </Container>
                <Container fluid={true} style={{width:'100%'}}>
                    <h2 style={{textAlign:'center'}}>Projects</h2>
                    <CardGroup>
                    <Card bg="info">
    
    <Card.Body>
      <Card.Title>EventLog-Amrita</Card.Title>
      <Card.Text>
        An Android App with Firebase DB to display info about events happening Amrita.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Completed 1st build. Refining for production build and bugs</small>
    </Card.Footer>
  </Card>
  <Card bg="danger">
    
    <Card.Body>
      <Card.Title>Research Paper on Object Detection algorithms with mobile platform Compatibility</Card.Title>
      <Card.Text>
        A survey paper on various DL algorithms which are copatible on porting to android platform using tensorflow
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Work in Progress</small>
    </Card.Footer>
  </Card>
  <Card bg="warning">
    
    <Card.Body>
      <Card.Title>Deep Learning Segmentation Logic(Hackathon Project)</Card.Title>
      <Card.Text>
      To log accurate time-stamps of the audible voice clips in a continuous audio stream.A DL model that reads a large audio file and segments the audio.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Recorded an accuracy of 95% in the contest finals</small>
    </Card.Footer>
  </Card>
                    </CardGroup>
                </Container>
<Container >
    <h2 style={{textAlign:'center'}}>Awards and Certifications</h2>
    <div style={{paddingLeft:'30%'}}>
    <Card style={{ width: '50%'  }}>
  <ListGroup  variant="flush">
    <ListGroup.Item variant="primary">Academic Excellence Award in 12th Std</ListGroup.Item>
    <ListGroup.Item variant="warning">Department Topper in Semester 1</ListGroup.Item>
    <ListGroup.Item variant="secondary">Runner-up in SLAC Honeywell Hackathon 2019- team Exploit_It</ListGroup.Item>
    <ListGroup.Item variant="success">Certified in CCNA, Fundamentals of IoT, Cybersecurity, Linux Essentials, Cisco DevNet, Python by NetAcad</ListGroup.Item>
  </ListGroup>
</Card>
</div>
</Container>
            </div>

        );
    }
}