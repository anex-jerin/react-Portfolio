import React from 'react'
import Intro from './intro/Intro'
import About from './about/About'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Projects from './projects/Projects'
const content = () => {
  return (
    <div className='content'>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default content