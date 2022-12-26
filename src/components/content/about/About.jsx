import React from 'react';
import Svg from './svg/Svg';
const About = () => {
  return (
    <div className='about-section' id='about'>
      <div className='svg'>
        <Svg />
      </div>
      <div className='about-contain'>
        <h2 className='about-head'>About Me</h2>
        <div className='about-details'>
          <p>
            Hello! My name is Anex Jerin and I enjoy creating things that live
            on the internet. I'm a web developer with a focus on the MERN stack,
            but still exploring other technologies and frameworks that catch my
            interest! if you're looking for a developer to add to your team, I'd
            love to hear from you!
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skill-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>NEXT.js</li>
            <li>CSS</li>
            <li>Material UI</li>
            <li>Sass</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
