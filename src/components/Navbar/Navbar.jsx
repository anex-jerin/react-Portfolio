import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../image/logo1.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`navbar ${!show && 'hidden'}`}>
      <div className='navlogo'>
        <a href='/'>
          <img src={logo} alt='' width='50px' hieght='50px' />
        </a>
      </div>
      <div
        className='toggle'
        onClick={() => {
          setIsToggle(!isToggle);
        }}
      >
        {isToggle ? <RxHamburgerMenu /> : <AiOutlineClose />}
      </div>
      <ul className={isToggle ? 'navlist' : 'navlist mobile'}>
        <li>
          <a
            href='#about'
            onClick={() => {
              setIsToggle(!isToggle);
            }}
          >
            <span>01.</span>ABOUT
          </a>
        </li>
        <li>
          <a href=''>
            <span>02.</span>PROJECTS
          </a>
        </li>
        <li>
          <a
            href='#contact'
            onClick={() => {
              setIsToggle(!isToggle);
            }}
          >
            <span>03.</span>CONTACT
          </a>
        </li>
        <li>
          <button className='resume'>RESUME</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
