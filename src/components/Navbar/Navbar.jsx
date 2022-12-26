import React from 'react';
import { useState } from 'react';
import logo from './logo1.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <div className='navbar'>
      <div className='navlogo'>
        <img src={logo} alt='' width='50px' hieght='50px' />
      </div>
      <div
        className='toggle'
        onClick={() => {
          setIsToggle(!isToggle);
        }}
      >
        {isToggle ? <RxHamburgerMenu /> : <AiOutlineClose />}
      </div>
      <ul className={isToggle ? 'navlist' : 'navlist active'}>
        <li>
          <a href='#about' onClick={()=>{
            setIsToggle(!isToggle)
          }}>
            <span>01.</span>ABOUT
          </a>
        </li>
        <li>
          <a href=''>
            <span>02.</span>PROJECTS
          </a>
        </li>
        <li>
          <a href=''>
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
