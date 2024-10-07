import React, { useState } from 'react';
import Modal from '../components/Modal'; 
import './Works.css';

const projects = [
  {
      id: 1,
      title: 'Azure Digital Designer',
      date: '2022.05.12',
      category: 'portfolio',
      image: `${process.env.PUBLIC_URL}/images/portfolio2.png`,
      description: "Azure Digital Designer is a simple portfolio I created back in 2022, showcasing my journey as a 20-year-old digital designer based in the Philippines. My name is Cess, and I specialize in crafting digital designs for websites, products, and promotions. With experiences spanning from freelance design to in-house writing and web design, I've honed my skills across various platforms and projects. I have a strong foundation in front-end coding, combined with expertise in powerful CMS platforms, making me versatile in both design and development. My portfolio highlights the tools I frequently use, projects I've worked on, and how I can help bring creative ideas to life.",
      technologies: 'HTML / CSS Grid / Font Awesome / Javascript',
  },
  {
      id: 2,
      title: 'Wandrr Travel Booking',
      date: '2023.05.08',
      category: 'web apps',
      image: `${process.env.PUBLIC_URL}/images/port5.png`,
      description: "Wandrr Travel Booking is a user-friendly platform designed to simplify the process of planning and booking travel experiences. The idea behind it is to create a one-stop site where users can easily find and reserve their ideal vacations, whether they're looking for a serene beach getaway or a thrilling adventure trek. The platform focuses on providing a seamless experience, backed by a dedicated team of travel experts who offer personalized assistance. Wandrr empowers travelers to turn their dream vacations into reality, offering a wide range of options that cater to diverse preferences.",
      technologies: 'HTML / CSS / Font Awesome / Bootstrap / Javascript',
  },
  {
      id: 3,
      title: 'Migard Hotel Reservations',
      date: '2022.12.18',
      category: 'web apps',
      image: `${process.env.PUBLIC_URL}/images/portfolio1.png`,
      description: "Migard Hotel Reservation is a streamlined booking system designed to connect travelers with top-notch accommodations effortlessly. Built around the concept of delivering a worthy experience, Migard ensures guests can find and reserve the perfect hotel for their needs, whether for business or leisure. The platform is committed to offering a seamless booking process, with a focus on quality, comfort, and convenience. With Migard, every stay is more than just a reservation—it's the gateway to a remarkable hotel experience tailored just for you.",
      technologies: 'HTML / CSS / Bootstrap / Javascript',
  },
  {
      id: 4,
      title: 'w3schools database',
      date: '2023.04.17',
      category: 'back-end',
      image: `${process.env.PUBLIC_URL}/images/port6.1.png`,
      description: "w3schools database is a project focused on showcasing CRUD (Create, Read, Update, Delete) functionalities within a database environment. The aim of this project is to provide an intuitive interface for managing data, simulating real-world database interactions. It leverages essential database operations to demonstrate how information can be effectively handled, modified, and retrieved. Designed for educational purposes, this project offers a hands-on approach to learning and mastering database management, making it a practical resource for both beginners and experienced developers.",
      technologies: 'PHP / CSS / Bootstrap / Javascript',
  },
  {
      id: 5,
      title: 'Calendar Designs',
      date: '2023.03.06',
      category: 'front-end',
      image: `${process.env.PUBLIC_URL}/images/port8.png`,
      description: "The Ghibli Calendar is a visually enchanting project inspired by the magical worlds of Studio Ghibli. Created using HTML, CSS, and JavaScript, this calendar is not only functional but also aesthetically designed to bring the charm of Ghibli's iconic animations to life. Each month and date is brought to the screen with delicate animations, vibrant colors, and immersive visuals reminiscent of Ghibli's storytelling. Whether you're planning your schedule or simply admiring its design, the Ghibli Calendar blends practicality with artistic flair, making daily planning an enjoyable experience.",
      technologies: 'HTML / SCSS / Javascript',
  },
];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' || project.category === activeFilter
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="works d-flex flex-column align-items-center justify-content-center">
      <h1 className="works-title">portfolio</h1>
      
      <div className="works-filters">
        {['all', 'portfolio', 'web apps', 'back-end', 'front-end'].map(filter => (
          <span
            key={filter}
            className={`filter ${filter === activeFilter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="works-grid text-white">
        {filteredProjects.map((project) => (
          <div key={project.id} className="works-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay d-flex flex-column">
              <p className="preview-btn">see preview</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
};

export default Works;
