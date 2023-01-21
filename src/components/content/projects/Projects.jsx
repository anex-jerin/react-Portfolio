import React from 'react';
import Dashboard from '../../../image/dashboard.png';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import OtherProjects from './OtherProjects';

const Projects = () => {
  return (
    <div className='project-section' id='project'>
      <div className='project-contain'>
        <h2 className='project-head'> Some Things I've Built</h2>
        <div className='projects'>
          <div className='project-img'>
            <a
              href='https://dashboard-frontend-5ecz.onrender.com'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='p-img'
                src={Dashboard}
                alt='dashboard'
              />
              <div className="overlay"></div>
            </a>
          </div>
          <div className='project-content'>
            <p className='project-overline'>Featured Project</p>
            <a
              href='https://dashboard-frontend-5ecz.onrender.com'
              target='_blank'
              rel='noreferrer'
              className='project-title'
            >
              <h3>Sales Dashboard</h3>
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
            <ul className='project-link'>
              <li>
                <a
                  href='https://github.com/anex-jerin/Dashboard'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiGithub />
                </a>
              </li>
              <li>
                <a
                  href='https://dashboard-frontend-5ecz.onrender.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <HiOutlineExternalLink />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <OtherProjects/>
    </div>
  );
};

export default Projects;
