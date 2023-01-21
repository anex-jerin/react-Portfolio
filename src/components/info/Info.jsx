import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl';
import { ImCodepen } from 'react-icons/im';

const Info = () => {
  return (
    <>
      <div className='info-left'>
        <ul className='social'>
          <li>
            <a
              href='https://github.com/anex-jerin'
              title='GitHub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiGithub className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/Anexjerin'
              title='Twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SlSocialTwitter className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/anex-jerin/'
              title='Linkedin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SlSocialLinkedin className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/anex-jerin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ImCodepen className='icon' />
            </a>
          </li>
        </ul>
      </div>
      <div className='info-right'>
        <ul className='gmail'>
          <li className='vertical'>
            <a href='mailto:anexjerin@gmail.com'>anexjerin@gmail.com</a>{' '}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info;
