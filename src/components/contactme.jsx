import React from 'react';
import {Container , Jumbotron, Row, Col, Table, ProgressBar, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import bck from '../contactmebck.png';
export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option:0
        }
    }
    handlegithub = e => {
        e.preventDefault();
        window.open('http://github.com/sachmo99');
    }
    handlefacebook = e => {
        e.preventDefault();
        window.open('http://www.facebook.com/saichandra.mouli.77');
    }
    handlelinkedin = e => {
        e.preventDefault();
        window.open('http://www.linkedin.com/in/sai-chandra-mouli-tadiparthi-75a876165/');
    }
    handletwitter = e => {
        e.preventDefault();
        window.open('http://twitter.com/Sachmo_Sai');
    }
    handleentry= e => {
        e.preventDefault();
        this.setState({option:1});
    }
    handleexit= e => {
        e.preventDefault();
        this.setState({option:0});
    }
    render() {
        return(
            <div style={{backgroundImage:`url(${bck})`, backgroundSize:'cover'}}>
                
                <Container style={{width:'60%',  justifyContent:'center',paddingTop:'15vh', height:'90vh'}}>
                    <Card style={{height:'60vh'}} bg="transparent">
                      <Card.Title>Reach Out to Me On</Card.Title>
                      <Card.Body>
                          <Row>
                        <Col>
                     <FontAwesomeIcon icon={faGithub}  style={{color:'black'}} size="3x" onClick={this.handlegithub} onMouseEnter={this.handleentry}  onMouseLeave={this.handleexit}/>
                     {this.state.option===1 && <small>click to follow link</small>}
                     <br></br>
                     <br></br>
                     </Col>
                     </Row>
                     <Row>
                     <Col md={{ span: 4, offset: 2 }} >
                     <FontAwesomeIcon icon={faFacebook} style={{color:'darkblue'}} size="3x" onClick={this.handlefacebook} onMouseEnter={this.handleentry}  onMouseLeave={this.handleexit}/>
                     {this.state.option===1 && <small>click to follow link</small>}
                     <br></br>
                     <br></br>
                     </Col>
                     </Row>
                     <Row>
                     <Col md={{ span: 4, offset: 4 }}>
                     <FontAwesomeIcon icon={faLinkedin} size="3x" style={{color:'grey'}} onClick={this.handlelinkedin} onMouseEnter={this.handleentry}  onMouseLeave={this.handleexit}/>
                     {this.state.option===1 && <small>click to follow link</small>}
                     <br></br>
                     <br></br>
                     </Col>
                     </Row>
                     <Row>
                     <Col md={{ span: 6, offset: 6 }}>
                     <FontAwesomeIcon icon={faTwitter} size="3x" style={{color:'green'}} onClick={this.handletwitter} onMouseEnter={this.handleentry}  onMouseLeave={this.handleexit}/>
                     {this.state.option===1 && <small>click to follow link</small>}
                     <br></br>
                     <br></br>
                     </Col>
                     </Row>
                    </Card.Body>                     
                    </Card>
                </Container>
            </div>

        );
    }
}