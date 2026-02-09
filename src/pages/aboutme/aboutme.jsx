import React from 'react';
import './aboutme.css';
import profile from '../../assets/profile.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <div className="about">
      <div className="about-card">
        <img src={profile} alt="Md Hussain" className="about-img" />

        <h1>About Me</h1>

        <p>
          Hello! I’m <strong>Md Hussain</strong> from West Bengal, India.  
          I completed my <strong>BTech in Computer Science</strong>, and I’m passionate about building modern web applications using React, Java, and Spring Boot.  
          Learning and coding have always been my way to explore technology and create solutions that make life easier.
        </p>

        <p>
          But life isn’t all about coding! When I’m taking a break, you’ll usually find me:
        </p>

        <p className="about-hobbies">
          <Typewriter
            words={[
              '🏏 Playing Cricket',
              '🎧 Listening to Music',
              '🎮 Gaming',
              '✈️ Traveling and exploring new places'
            ]}
            loop={0} // infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </div>
    </div>
  );
};

export default About;
