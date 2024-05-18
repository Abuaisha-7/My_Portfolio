import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';
// Import the image
import Netflix from '../../../assets/img/Netflix_Logo_PMS.png';
import amazon from '../../../assets/img/Amazon_icon.svg.png';
import evangadi from '../../../assets/img/evangadi-logo.png';
import abegarage from '../../../assets/img/abegarage.png';
import heyru from '../../../assets/img/HNprofile.jpg';


const projects = [
  {
    title: 'Project One',
    description: 'The Netflix Clone project is a full-featured web application designed to replicate the user experience of the popular streaming service, Netflix. This clone provides a seamless and immersive platform for users to explore, browse, and stream their favorite movies and TV shows.',
    image: `${Netflix}`,
    link: 'https://netflix-clone-heyru.netlify.app'
  },
  {
    title: 'Project Two',
    description: 'The Amazon Clone project is an e-commerce web application designed to mimic the core functionalities and user experience of the renowned online retail platform, Amazon. This clone provides a comprehensive shopping experience, allowing users to browse, search, and purchase a wide variety of products.',
    image: `${amazon}`, 
    link: 'https://amazon-clone-frontend-heryu.netlify.app/'
  },
  {
    title: 'Project Three',
    description: 'The Evangadi Forum Clone project is a community-driven web application modeled after the Evangadi Forum, designed to foster discussion and knowledge sharing among users. This clone provides a dynamic platform for users to post questions, share answers, and engage in meaningful conversations on a wide range of topics.',
    image: `${evangadi}`,
    link: 'https://evangadi-forum-clone-by-heyru.netlify.app'
  },
  {
    title: 'Project Four',
    description: 'Abe Garage is a modern web application designed to streamline automotive repair and maintenance services. This platform provides a user-friendly interface for customers to book appointments, track service history, and get detailed information about various automotive services offered. Abe Garage aims to enhance customer convenience and service efficiency in the automotive repair industry.',
    image: `${abegarage}`,
    link: 'https://abegarage-heyru.netlify.app/'
  },
  {
    title: 'Project Five',
    description: 'Welcome to my personal portfolio website, a carefully crafted platform to showcase my skills, projects, and professional journey. This website serves as an online resume, providing a comprehensive overview of my work, accomplishments, and expertise in the field of web development and design. It is designed to offer potential employers, collaborators, and clients a clear insight into my capabilities and achievements.',
    image: `${heyru}`,
    link: 'https://heyru-bedru.netlify.app/'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
