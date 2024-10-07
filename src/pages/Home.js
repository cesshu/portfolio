import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-section d-flex align-items-center gap-3">
      <div className="d-flex flex-column gap-3 col-7">
        <h1 className="text-white name">Hi, I'm  
          <span className="highlights"> Cess</span>!
        </h1>
        <p className="text-white">I am a <span className="highlights">web developer</span>  with a passion for building <span className="highlights">innovative</span> and <span className="highlights">user-friendly</span> websites and applications. Here are some <span className="highlights">highlights</span> of my work:</p>
        <div className="d-flex gap-3">
          <Link to="/about" className="btn btn-outline-light rounded-5 btn-links">about</Link>
          <Link to="/works" className="btn btn-outline-light rounded-5 btn-links">gallery</Link>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/cess1.jpg`} alt="MyPicture" className="image col" />
    </div>
  );
};

export default Home;