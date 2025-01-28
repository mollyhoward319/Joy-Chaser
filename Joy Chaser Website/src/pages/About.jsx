import React from 'react';
import aboutImage from '../assets/About.png'; // Import the image

export default function About() {
  return (
      <div className="container">
      <div className="row">
        <div className="col-lg-6">
      <img src={aboutImage} alt="About Me" className='img-responsive' style={{ width: '500px', maxWidth: '600px', height: 'auto', marginTop: 53 }} />
      </div>

      <div className="col-lg-6" style={{marginTop: 85}}>
      <div>
      Hello, I am Molly Howard, a Full Stack Developer with a strong background in Program Management, Social Media Marketing, Web Design, and Communication. I am entering the web developer field with certification from University of Wisconsin Coding Bootcamp.   
<br></br>
<br></br>
I have knowledge of the fundamental concepts of web development (HTML, CSS, & JavaScript), as well as command line fundamentals and Git version control. I have the skills necessary to engineer full-stack web applications, work with servers, databases, and other back-end technologies, and connecting them to the front end.  I have worked with AI-powered technologies such as OpenAI and LangChain. 
<br></br>
<br></br>
      Proficient Front End Web Design Languages:
      <br></br>
HTML5 <br></br>
Node.js Programming<br></br>
JavaScript<br></br>
MERN Stack<br></br>
Progressive Web Apps<br></br>
Object-Oriented Programming<br></br>
Python Fundamentals<br></br>
<br></br>
    <br></br>
I have experience working on a variety of projects, from building dynamic web applications to developing command-line tools. My recent work includes a weather dashboard application using TypeScript and the OpenWeather API, a command-line application for managing databases with Node.js and Inquirer, as well as my own LinkTree with links to my personal creative business, using React and JavaScrip
This portfolio is a collection of the projects I have completed which showcase my programming skills. 
      <br></br>
      <br></br>
I am a problem solver by nature. This transition into web development has been a seamless one using my previous knowledge and experience in graphic and web design. I enjoy creating, building, designing, and collaborating on coding projects. 
  </div>
    </div>
    </div>
    </div>
  );
}

