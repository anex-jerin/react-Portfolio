import React from 'react';
import Dashboard from '../../../image/dashboard.png';

const Projects = () => {
  return (
    <div className='project-section'>
      <div className='project-contain'>
        <h2 className='project-head'> Some Things I've Built</h2>
        <div className='projects'>
          <div className='project-content'>
            <p className='project-overline'>Featured Project</p>
            <a href='' className='project-title'>
        
              <h3>Dashboard</h3>
            </a>
            <div className='project-description'>
              <p>
                A web app for user friendly dashboard at glance, Easily track
                your Customers. Monitor and analyzing Daily, Monthly, Yearly
                sales
              </p>
            </div>
            <ul className='project-tech'>
              <li>Mongo DB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node JS</li>
              <li>Material UI</li>
              <li>Nivo</li>
            </ul>
          </div>
          <div className='project-img'>
            <a
              href='https://dashboard-frontend-5ecz.onrender.com'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='p-img'
                src={Dashboard}
                alt='dashboard image'
                width='550px'
                height='350px'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
