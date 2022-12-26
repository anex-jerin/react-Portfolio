import React from 'react';
import Svg from './Svg/Svg';
import { FiGithub } from 'react-icons/fi';
import { SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl';
import { ImCodepen } from 'react-icons/im';

const Info = () => {
  return (
    <>
      <div className='info-left'>
        <ul className='social'>
          <li>
            <a href='https://github.com/anex-jerin' title='GitHub'>
              <FiGithub className='icon' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/Anexjerin' title='Twitter'>
              <SlSocialTwitter className='icon' />
            </a>
          </li>
          <li>
            <a href='' title='Linkedin'>
              <SlSocialLinkedin className='icon' />
            </a>
          </li>
          <li>
            <a href=''>
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
