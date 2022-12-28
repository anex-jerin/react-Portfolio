import React from 'react';

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <div className='contact-contain'>
        <h6 className='contact-head'>What's Next?</h6>
        <h2 className='contact-next'>Get In touch</h2>
        <div className='contact-details'>
          <p>
            I am currently looking for any new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi, I
            will try my best to get back to you!
          </p>
        </div>
        <div>
          <button
            className='contact-btn'
            onClick={() =>
              (window.location.href = 'mailto:anexjerin@gmail.com')
            }
          >
            Say Hello
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
