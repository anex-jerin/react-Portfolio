import React from 'react';
import star from '../../../image/Star.png'

const Intro = () => {
  return (
    <section className='intro-section'>
      <div className='contain'>
        <div>
          <h1 className='intro'>Hi, my name is</h1>
        </div>
        <div>
          <h2 className='name'>Anex Jerin.</h2>
        </div>
        <div>
          <h3 className='do'>I build things for the web.</h3>
        </div>
        <div>
          <p className='details'>
            I’m a web developer specializing in building and designing
            exceptional digital experiences. From India, Kerala.
          </p>
        </div>
      </div>
      {/* <div className="star">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div> */}
    </section>
  );
};

export default Intro;
