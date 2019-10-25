import React from 'react';
import pic1 from '../resize-1styearwithclg.jpg';
import amrita from '../resize3amrita.png';
import narayana from '../narayana-resize.jpg';
import stritalogo from '../resizestrita.png';
import nrynaprize from '../resize_recompressed_sachmo_nryna.jpg';
import {Container , Jumbotron, Row, Col, Table } from 'react-bootstrap';
import bck from '../background.jpg';
import strita from '../strita.jpg';
export default class About extends React.Component {
    render() {
        return(
            <div style={{backgroundImage:`url(${bck})`, backgroundSize:'cover', color:'white'}}>
                <Jumbotron style={{backgroundColor:'transparent', paddingBottom:'20%', height:'450px', width:'100%'}}>
                    <h1>Alma Mater</h1>
                    <div>
                    <Container fluid={true} style={{maxWidth:'50%', float:'left', height:'250px'}} >
                    <Row>
                        <Col lg={3} >College Name</Col>
                        <Col lg={6} >Amrita Vishwa Vidhyapeetam</Col>
                     </Row>
                     <Row>
                     <Col lg={3}>Course</Col>
                        <Col lg={6}>B.Tech in CSE</Col>
                     </Row>
                     <Row>
                     <Col lg={3}>Period</Col>
                        <Col lg={3}>2017-2021</Col>
                     </Row>

                    </Container>
                    <Container style={{maxWidth:'50%',float:'right'}}>
                        <img src={amrita} alt="nothing" style={{overflow:'hidden', float:'right', position:'relative'}}/>
                    </Container>
                    </div>
                    </Jumbotron>
                    <img src={pic1} alt="whatever"></img>
                    <hr></hr>
                    <Jumbotron style={{paddingTop:'30px', backgroundColor:'transparent', width:'100%', height:'450px'}}>
                    
                    <Container fluid={true} style={{maxWidth:'50%', float:'right', height:'250px'}} >
                    <Table style={{float:'right'}}>
                    <Row>
                        <Col lg={3} >College Name</Col>
                        <Col lg={6} >Narayana CO-Spark and Narayana E-techno School</Col>
                     </Row>
                     <Row>
                     <Col lg={3}>Course</Col>
                        <Col lg={6}>9th to 12th Std. with MPC major</Col>
                     </Row>
                     <Row>
                     <Col lg={3}>Period</Col>
                        <Col lg={3}>2013-2017</Col>
                     </Row>
                     </Table>
                    </Container>
                    <Container style={{maxWidth:'50%',float:'left'}}>
                        <img src={narayana} alt="nothing" style={{overflow:'hidden', float:'left'}}/>
                    </Container>
                </Jumbotron>
                <img src={nrynaprize} alt="academic exccellence award" />
                <hr></hr>
                <Jumbotron style={{backgroundColor:'transparent', paddingBottom:'20%', height:'450px', width:'100%'}}>
            
                    <div>
                    <Container fluid={true} style={{maxWidth:'50%', float:'left', height:'250px'}} >
                    <Row>
                        <Col lg={3} >School Name</Col>
                        <Col lg={6} >St. Rita High School</Col>
                     </Row>
                     <Row>
                     <Col lg={3}>Study</Col>
                        <Col lg={6}>1st to 8th Std</Col>
                     </Row>
                     <Row>
                     <Col lg={3}>Period</Col>
                        <Col lg={3}>2005-2013</Col>
                     </Row>

                    </Container>
                    <Container style={{maxWidth:'50%',float:'right'}}>
                        <img src={stritalogo} alt="nothing" style={{overflow:'hidden', float:'right', position:'relative'}}/>
                    </Container>

                    </div>
                    </Jumbotron>
                    <img src={strita} alt="st rita award" style={{ paddingLeft:'50vh', width:'75%', height:'80vh'}} />
                
            
            </div>
        );
    }
}

/*<Navbar bg="danger" variant="dark" expand="lg">
          <FontAwesomeIcon icon="coffee"/>
          <Navbar.Brand href = "#home" className="fa fa-user-happy">Sachmo</Navbar.Brand>
          
      <Nav className="justify-content-end" activeKey="/home" >
            <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/awards">Awards and Qualifications</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/almamater">Alma Mater</Nav.Link>
      </Nav.Item>
      
    </Nav>
    </Navbar>
    <div className = "jumbotron"  >
   <Carousel>
     <Carousel.Item>
       <img src={slac} className="d-block w-100 h-30" alt="SLAC 2019 runners-up"></img>
     </Carousel.Item>
     <Carousel.Item>
       <img src={delhi} className="d-block w-100 h-30" alt="ACM cybsec summerschool 2019"></img>
     </Carousel.Item>
     <Carousel.Item>
       <img src={slac} className="d-block w-100 h-30" alt="SLAC 2019 runners-up"></img>
     </Carousel.Item>

   </Carousel>
   </div>
   <div className="jumbotron" style={{backgroundImage: 'url('+beach+')', width:'100%'}}>
       <div className="container" >
         <h1 style={{fontFamily:'Times New Roman', float:'left'}}>About Me:</h1>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <div style={{float:'right'}}>
         <strong >Born as Sai Chandra Mouli Tadiparthi
         <br></br>
         <br></br>
         In the serene Town of Kakinada in East Godavari District, AP, India
         <br></br>
         <br></br>
          Born on 29 July, 1999
         </strong>
         </div>
       </div>
      
       
     </div>*/