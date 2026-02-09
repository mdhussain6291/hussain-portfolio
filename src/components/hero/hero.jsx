import React from 'react';
import './hero.css';
import profile from "../../assets/profile.jpeg";
import resumePDF from "../../assets/Hussain.Resume.pdf"; // ✅ import your resume here
import Button from '../button/button';

// ✅ Import Typewriter
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {

  const handleConnect = () => {
    window.location.href = 'mailto:mdhussain6291@gmail.com';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF; // use the imported PDF
    link.download = 'MdHussain_Resume.pdf';
    link.click();
  };

  return (
    <div className='hero'>
      <div className='hero-content'>
        <img src={profile} alt="Profile" className='hero-img' />

        <h1>
          Hi, I’m <span className="hero-name">Md Hussain</span> —
          <br/>{' '}
          <Typewriter
            words={["Full Stack Developer", "Cricket Lover", "Music Enthusiast", "Gamer", "Traveler"]}
            loop={0}           // infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>

        <p>
          BTech CSE graduate passionate about building modern web applications
          using React, Java, and Spring Boot. I love turning ideas into clean,
          scalable, and user-friendly digital experiences.
        </p>

        <div className='hero-buttons'>
          <Button text="Connect With Me" onClick={handleConnect} />
          <Button text="Download Resume" onClick={handleDownload} />
        </div>
      </div>
    </div>
  );
};

export default Hero;


