import React from 'react';
import {Container , Jumbotron, Row, Col, Table, ProgressBar, Card } from 'react-bootstrap';
import teaching from '../teaching.jpg';
export default class SkillSet extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div style={{ color:'black', position:'relative'}}>
                <div className="bg" style={{position:'absolute',width:'100%', height:'100%', backgroundImage:`url(${teaching})`, opacity:'0.4'}}></div>
                <div>
                <Container fluid={true} style={{ width:'70%', paddingLeft:'0', opacity:'1.0' }} >
                    <strong>As a CS student, I love what I learn. I often engage myself in learning new languages, tools, techniques and much more skills.</strong>
                    <br></br>
                    <strong>I also believe in passing down to my juniors and my peers what I learn, by conducting workshops and discussions.(the background is me teaching sql injections :P )<br></br><br></br> <a style={{color:'darkblue'}}> I may not be much.. But I believe there is always a room for my growth. </a></strong>
                </Container>
                <div style={{opacity:'1.0'}}>
                <h1 style={{textAlign:'center'}}>SkillBars</h1>
                <div style={{paddingLeft:'15em'}}>
                    <Card style={{width:'50rem'}}>
                <h3 style={{textAlign:'center'}}>Data Structures and Algorithms</h3>
                <ProgressBar id="pb1" name="pb1" style={{width:'100%', opacity:'1.0' }}striped variant="success" now={65}  label="Good" animated></ProgressBar>
                </Card>
                </div>
                <br></br>
                <div style={{paddingLeft:'15em'}}>
                    <Card style={{width:'50rem'}}>
                <h3 style={{textAlign:'center'}}>Web Development using HTML/CSS/MERN stack</h3>
                <ProgressBar id="pb1" name="pb1" style={{width:'100%', opacity:'1.0' }}striped variant="info" now={85} label="VeryGood" animated></ProgressBar>
                </Card>
                </div>
                <br></br>
                <div style={{paddingLeft:'15em'}}>
                    <Card style={{width:'50rem'}}>
                <h3 style={{textAlign:'center'}}>Programming Languages like Python, Java,C,C++</h3>
                <ProgressBar id="pb1" name="pb1" style={{width:'100%', opacity:'1.0' }}striped variant="danger" now={70} label="VeryGood" animated></ProgressBar>
                </Card>
                </div>
                <br></br>
                <div style={{paddingLeft:'15em'}}>
                    <Card style={{width:'50rem'}}>
                <h3 style={{textAlign:'center'}}>Android App Programming</h3>
                <ProgressBar id="pb1" name="pb1" style={{width:'100%', opacity:'1.0' }}striped variant="success" now={70} label="Experienced" animated></ProgressBar>
                </Card>
                </div>
                <br></br>
                <div style={{paddingLeft:'15em'}}>
                    <Card style={{width:'50rem'}}>
                <h3 style={{textAlign:'center'}}>Cybersecurity And CTFs</h3>
                <ProgressBar id="pb1" name="pb1" style={{width:'100%', opacity:'1.0' }}striped variant="danger" now={65} label="Good" animated></ProgressBar>
                </Card>
                </div>
                <br></br>
                <div style={{paddingLeft:'15em'}}>
                    <Card style={{width:'50rem'}}>
                <h3 style={{textAlign:'center'}}>IoT and Its Applications</h3>
                <ProgressBar id="pb1" name="pb1" style={{width:'100%', opacity:'1.0' }}striped variant="info" now={45} label="Adequate" animated></ProgressBar>
                </Card>
                </div>
                
                </div>
                </div>
            </div>
        );
    }
}