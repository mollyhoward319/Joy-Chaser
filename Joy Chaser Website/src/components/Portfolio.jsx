import Card from './Card';
import React from 'react';
import EFnerdsImage from '../assets/EFnerds.png';
import weatherImage from '../assets/weather.png';
import employeeImage from '../assets/employee.png';
import vehicleImage from '../assets/vehicle.png';
import joychaserImage from '../assets/joychaser.jpg';
import readmeImage from '../assets/readme.png';
import '../styles/Portfolio.css';



const projects = [
  {
    id: 'p1',
    image: EFnerdsImage,
    title: 'Efficiency Nerds - Productivity App',
    link: 'https://github.com/mollyhoward319/Efficiency-Nerds'
  },
  {
    id: 'p2',
    image: weatherImage,
    title: 'Weather Forecast App',
    link: 'https://github.com/mollyhoward319/Weather-Dashboard'
  },
  {
    id: 'p3',
    image: employeeImage,
    title: 'Postgres App',
    link: 'https://github.com/mollyhoward319/EmployeeTracker'
  },
  {
    id: 'p4',
    image: vehicleImage,
    title: 'Vehicle Builder',
    link: 'https://github.com/mollyhoward319/VehicleBuilder'
  },
  {
    id: 'p5',
    image: joychaserImage,
    title: 'Joy Chaser Website',
    link: 'https://linktr.ee/joychaser'
  },
  {
    id: 'p6',
    image: readmeImage,
    title: 'README Generator',
    link: 'https://github.com/mollyhoward319/READMEgenerator'
  },

]

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="container-fluid">
        <div className="row">
    {projects.map((project) => (
      <div key={project.id} className="col-lg-4 col-md-6 mb-44">
      <Card key={project.id}
      image={project.image}
      title={project.title}
      link={project.link}
      />
      </div>
    ))}
    </div>
    </div>
    </div>
    );
  }
   
export default Portfolio;
