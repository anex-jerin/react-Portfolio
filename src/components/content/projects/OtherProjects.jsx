import React from 'react';
import { projects } from './data';
import { IoFolderOpenOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';

const OtherProjects = () => {
  return (
    <div className='o-projects'>
      <h2> Other Noteworthy Projects</h2>
      <div className='op'>
        {projects.map((item) => {
          const { header, tech, desc, link } = item;
          return (
            <div className='o-project'>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='op-link'
              >
                <div className='o-head'>
                  <IoFolderOpenOutline className='folder-ico' />
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    <FiGithub />
                  </a>
                </div>
                <a
                  className='o-title'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={link}
                >
                  {header}
                </a>
                <div className='o-desc'>
                  <p>{desc} </p>
                </div>
                <ul className='o-tech'>
                  {tech.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProjects;
