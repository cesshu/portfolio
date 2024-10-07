// src/pages/About.js
import React from 'react';
import Card from '../components/Card';
import Cardv2 from '../components/Cardv2';
import { FaTwitter, FaFacebook, FaYoutube, FaCodepen, FaDesktop, FaCode, FaHtml5, FaCss3Alt, FaReact, FaSass, FaPhp, FaWordpressSimple, FaFigma, FaLaravel} from 'react-icons/fa'; // Social media icons
import { FaWandMagicSparkles } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const services = [
    { title: 'Front-end Development', content: 'Using HTML, CSS, and JS, we deliver responsive designs for a great user experience.', Icon: FaDesktop },
    { title: 'Back-end Development', content: 'Programming languages and technologies for scalable, secure, and performant projects.', Icon: FaCode },
    { title: 'Creative Development', content: 'Creating unique and effective design for you and your brand\'s personality.', Icon: FaCodepen },
    { title: 'UI/UX Design', content: 'Create intuitive and engaging user experiences through a user-centered design process.', Icon: FaWandMagicSparkles }
  ];

  const technologies = [
    { title: 'HTML5', Icon: FaHtml5 },
    { title: 'CSS3', Icon: FaCss3Alt },
    { title: 'Codepen', Icon: FaCodepen },
    { title: 'React', Icon: FaReact },
    { title: 'SCSS', Icon: FaSass },
    { title: 'PHP', Icon: FaPhp },
    { title: 'WordPress', Icon: FaWordpressSimple },
    { title: 'Figma', Icon: FaFigma },
    { title: 'Laravel', Icon: FaLaravel },
  ]
  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="section introduction d-flex flex-column justify-content-center gap-5">
        <h2 className="section-title mb-5">introduction</h2>
        <p className="section-paragraph mb-4 intro-paragraph">
          Welcome to my online portfolio! I'm Cess, a skilled and enthusiastic web developer. If you're in need of a beautifully designed website, a cohesive brand identity, or user-centered digital experiences, I'm the one to contact. My ultimate goal is to help your business succeed through thoughtful and user-friendly design and I promise to exceed all your expectations with my top-notch work. Thank you for considering me for your project. I can't wait to get started and bring your vision to life through impactful design.
        </p>
        <div className="d-flex justify-content-center">
        <Link to="/works" className="btn btn-outline-light rounded-5 btn-links">gallery</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services d-flex flex-column">
        <h2 className="section-title mb-5 pb-4">skills</h2>
        <div className="container">
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-lg-6 mb-2 d-flex justify-content-center flex-wrap">
                <Card title={service.title} content={service.content} Icon={service.Icon}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section technologies">
        <h2 className="section-title mb-5 pb-4">technologies</h2>
        <div className="container">
          <div className="row justify-content-center">
            {technologies.map((technology, index) =>(
              <div key={index} className="col-12 col-lg-4 mb-2 d-flex justify-content-center flex-wrap">
                <Cardv2 title={technology.title} Icon={technology.Icon}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact d-flex flex-column justify-content-center">
        <h1 className="contact-title">contact form</h1>
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="text-white text-sm">Name</label>
            <input type="text" id="name" className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="text-white text-sm">Email address</label>
            <input type="email" id="email" className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject" className="text-white text-sm">Subject</label>
            <input type="text" id="subject" className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="text-white text-sm">Message body</label>
            <textarea id="message" className="form-input" rows="5"></textarea>
          </div>
          <p className="text-white text-sm">Please feel free to contact me for your inquiries</p>

          <div>
            <button type="submit" className="btn-submit btn btn-outline-light rounded-5 btn-links">submit</button>
          </div>
        </form>

        <div className="contact-social">
          <div className="social-icons">
            <FaTwitter className="icon text-white" />
            <FaFacebook className="icon text-white" />
            <FaYoutube className="icon text-white" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
