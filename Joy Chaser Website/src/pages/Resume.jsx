import '../styles/Resume.css';
import downloadIcon from '../assets/download.png';
import { useState } from 'react';

export default function Resume() {

  const [isHovered, setIsHovered] = useState(false);

    return (
      <div>
        <h1>Resume</h1>
        <a href="https://drive.google.com/file/d/1eZN1nNBN8omu8wcahNwzUBkmtu9ivUQu/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
     >
                <img
                    src={downloadIcon}
                    alt="resume"
                    style={{ width: '20%', 
                      height: 'auto',
                      filter: isHovered ? 'brightness(100%) saturate(10%) invert(30%) sepia(10%) saturate(10%) hue-rotate(177deg) brightness(100%) contrast(90%)' : 'none', }}
                />
            </a>
        <div className="resumeFront">Front End Proficiencies</div>
        <br></br>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        <br></br>
        <div className="resumeBack">Back End Proficiencies</div>
        <br></br>
        <ul>
            <li>API</li>
            <li>NodeJS</li>
            <li>Typescript</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
        
        </div>
    );
  }