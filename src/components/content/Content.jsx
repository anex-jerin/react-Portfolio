import React from 'react'
import Intro from './intro/Intro'
import About from './about/About'

const content = () => {
  return (
    <div className='content'>
      <Intro/>
      <About/>
    </div>
  )
}

export default content