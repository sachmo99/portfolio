import React from 'react';

import mypic from './mypic.jpg'
import './App.css';
import SkillSet from './components/skillset.jsx';
import {HashRouter , Switch, Route } from 'react-router-dom';
import beach from './red-car-min.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Carousel, CarouselItem, CarouselProps, Container, Jumbotron, Row, Col } from 'react-bootstrap';
import About from './components/about.jsx';
import ContactMe from './components/contactme';
import Projects from './components/projects.jsx';
import ccna_200 from './ccna_200.png';
import ccna from './ccna.png';
import resume from './T_sai_chandra_mouli _latest.pdf';
const routes = (
    <HashRouter basename="/">
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route  path="/about" component={Abt} /> 
          <Route  exact path={/*process.env.PUBLIC_URL + */ '/almamater'} component={About} />
          <Route  path={/*process.env.PUBLIC_URL +*/ '/skillset'} component={SkillSet} />
          <Route  path= {/*process.env.PUBLIC_URL +*/ '/contactme'} component={ContactMe} />
          <Route  path={/*process.env.PUBLIC_URL +*/ '/projects'} component={Projects} />
        </Switch>

      </HashRouter>
  

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
        <Navbar.Brand>SACHMO<a href={resume} download="T_SAI_CHANDRA_MOULI_RESUME.pdf"><FontAwesomeIcon icon="cloud-download-alt" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id = "responsive-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link href="/portfolio">Home</Nav.Link>
            <Nav.Link href="/portfolio/#/about">About Me</Nav.Link>
            <Nav.Link href="/portfolio/#/almamater">AlmaMater</Nav.Link>
            <Nav.Link href="/portfolio/#/skillset">Skill Set</Nav.Link>
            <Nav.Link href="/portfolio/#/projects">Projects, Awards and Contributions</Nav.Link>
            <Nav.Link href="/portfolio/#/contactme">Get In Touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
       
        {routes}
        { false && <div> <Home />
        <br></br>
        <br></br>
        <Abt />
        <br></br>
        <br></br>
        <About />
        <br></br>
        <br></br>
        <SkillSet />
        <Projects />
        <ContactMe /> </div>}
        
        <div style={{textAlign:'center', backgroundColor:'green'}}>
          Copyright{'\u00A9'}2019 Sachmo {process.env.PUBLIC_URL}
        </div>
        
      </div>
    );
  }
}
function Abt() {
  return (
    <div style={{backgroundImage:`url(${beach})`, backgroundSize:'cover', height:'100%'}}>
   <Jumbotron style={{backgroundImage:`url(${beach})`, backgroundSize:'cover', height:'100%', position:'relative', zIndex:'9'}}>
     <div style={{textAlign:'center', position:'relative'}}>
       <h2><strong>About Me</strong></h2>
     </div>
     <div style={{fontFamily:'Times New Roman', fontSize:'4vh',color:'darkorange'}}>
       <strong>Hey, there! I am Sai Chandra Mouli Tadiparthi, hailing from a beautiful coastal town called Kakinada in Andhra Pradesh, India. I am the elder son of my parents. Being highly interested in the field of Computer Science since class 5, I started exploring the Computer Science domain on my own.</strong>
       <br></br>
       <br></br>
       <strong style={{color:'white'}}>However, it was not as smooth as it seemed to be. But as my father always says, 100% effort is not an option to overlook when we love something to core. I wrote my first python code when I was in 8th standard and my first C code in my 9th  standard. Yeah right, I started with Python (scoff.!). Reason why I still love python.</strong>
     <br></br>
     <br></br>
     <strong style={{color:'lightgreen'}}>I love to develop UX/UI pages and cybersecurity a lot. I play a lot of CTFs(Capture The Flag contests for those who are new :P ) and am always vigilant and willing to learn new concepts, security vulnerabilities and patches. Although still a long way to go...!  </strong>
     <br></br>
     
     </div>
     </Jumbotron>
     </div>
  );
}
function Home() {
  return(
    <div>
      <Jumbotron style={{backgroundColor:'white'}}>
        <Container style={{width:'100%'}}>
        <Row>
          <Col>
          <Row>
            <Col>
        <div className="container-fluid " style={{float:'left'}}>
          <h1>Hola!</h1>
          <strong style={{fontSize:'3vh'}}>
            Welcome to my portal. Here you can try to know more about me, my projects, my education and my interests. Or if nothing interests you... Let's have a chat :)
          </strong>
          
        </div>
        </Col>
        </Row>
        <Row>
        <Col>
        <br></br>
        <img src={ccna_200} alt="https://www.youracclaim.com/badges/14cbae7a-6391-4d80-b5be-52625a7333f5/public_url" style={{width:"75%"}}></img>
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="14cbae7a-6391-4d80-b5be-52625a7333f5" data-share-badge-host="https://www.youracclaim.com"></div><script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script> 
        </Col>
        <Col>
        <img src={ccna} alt="https://www.youracclaim.com/badges/bd2422a7-20ed-489f-8f8b-d284c012a343/public_url" style={{width:"100%"}}></img>
        </Col>
        </Row>
        </Col>
        <Col>
        <div className="container-fluid" style={{float:'right', width:'100%'}}>
          <img src={mypic} alt="its me!" style={{width:"100%"}}></img>
        </div>
        </Col>
        </Row>
        </Container>

      </Jumbotron>
    </div>
  );
}

export default App;
