import React from 'react';

import mypic from './mypic.jpg'
import './App.css';
import SkillSet from './components/skillset.jsx';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import beach from './beach.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Carousel, CarouselItem, CarouselProps, Container, Jumbotron, Row, Col } from 'react-bootstrap';
import About from './components/about.jsx';
import ContactMe from './components/contactme';
import Projects from './components/projects.jsx';
const routes = (
    <Router>
        <Switch>
          <Route exact path = "/" component={home}/>
          <Route exact path="/about" > <Abt /> </Route>
          <Route exact path='/almamater' component={About} />
          <Route exact path='/skillset' component={SkillSet} />
          <Route exact path='/contactme' component={ContactMe} />
          <Route exact path='/projects' component={Projects} />
        </Switch>

      </Router>
  

)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleresumedownload = e => {
    e.preventDefault();

  }
  render() {
    return (
      <div className="root">
       
        <Navbar sticky='top' collapseOnSelect expand="md" className="border-bottom bg-success" >
        <Navbar.Brand>SACHMO<a href="#downloadunresponsive" download><FontAwesomeIcon icon="cloud-download-alt" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id = "responsive-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#/about">About Me</Nav.Link>
            <Nav.Link href="/#/almamater">AlmaMater</Nav.Link>
            <Nav.Link href="/#/skillset">Skill Set</Nav.Link>
            <Nav.Link href="/#/projects">Projects, Awards and Contributions</Nav.Link>
            <Nav.Link href="/#/contactme">Get In Touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
       
        {routes}
        <div style={{textAlign:'center', backgroundColor:'green'}}>
          Copyright{'\u00A9'}2019 Sachmo 
        </div>
        
      </div>
    );
  }
}
function Abt() {
  return (
   <Jumbotron style={{backgroundImage:`url(${beach})`}}>
     <div style={{textAlign:'center'}}>
       <h2><strong>About Me</strong></h2>


     </div>
     <div style={{fontFamily:'Times New Roman', fontSize:'4vh',color:'purple'}}>
       <strong>Hey, there! I am Sai Chandra Mouli Tadiparthi, hailing from a beautiful coastal town called Kakinada in Andhra Pradesh, India. I am the elder son of my parents. Being highly interested in the field of Computer Science since class 5, I started exploring the Computer Science domain on my own.</strong>
       <br></br>
       <br></br>
       <strong style={{color:'black'}}>However, it was not as smooth as it seemed to be. But as my father always says, 100% effort is not an option to overlook when we love something to core. I wrote my first python code when I was in 8th standard and my first C code in my 9th  standard. Yeah right, I started with Python (scoff.!). Reason why I still love python.</strong>
     <br></br>
     <br></br>
     <strong>I love to develop UX/UI pages and cybersecurity a lot. I play a lot of CTFs(Capture The Flag contests for those who are new :P ) and am always vigilant and willing to learn new concepts, security vulnerabilities and patches. Although still a long way to go...!  </strong>
     <br></br>
     
     <p style={{color:'darkred'}}>This sums up the introduction about me. The background credits to <strong style={{color:'darkblue'}}>anonymous</strong> for capturing the beautiful beach of my town.</p>
     </div>
   </Jumbotron>
  );
}
function home() {
  return(
    <div>
      <Jumbotron style={{backgroundColor:'white'}}>
        <Row>
          <Col>
        <div className="container-fluid " style={{float:'left'}}>
          <h1>Hola!</h1>
          <strong style={{fontSize:'3vh'}}>
            Welcome to my portal. Here you can try to know more about me, my projects, my education and my interests. Or if nothing interests you... God Bless You Dear :P
          </strong>
        </div>
        </Col>
        <Col>
        <div className="container-fluid" style={{float:'right'}}>
          <img src={mypic} alt="its me!"></img>
        </div>
        </Col>
        </Row>


      </Jumbotron>
    </div>
  );
}

export default App;
