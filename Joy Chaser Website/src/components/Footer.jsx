import React from "react";
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';


function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/mollyhoward319" target="_blank" rel="noopener noreferrer">
                <img
                    src={githubIcon}
                    alt="GitHub"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://www.linkedin.com/in/margaret-howard-56ab5311/" target="_blank" rel="noopener noreferrer">
        <img 
          src={linkedinIcon} 
          alt="LinkedIn" 
          style={{ width: '40px', height: '40px', marginLeft: '8px' }} 
        />
      </a>
      <a href="mailto:mollyhoward.developer@gmail.com" target="_blank" rel="noopener noreferrer">
        <img 
          src={emailIcon} 
          alt="Email" 
          style={{ width: 'auto', height: '40px' , marginLeft: '8px'}} 
        />
      </a>
        </footer>
    )
}

export default Footer;