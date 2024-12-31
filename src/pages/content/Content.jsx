import React from 'react'
import './Content.css'
import contentImg from '../../assets/img-content.svg'


const Content = () => {
  return (
    < section>
       <div className="container">
        <div className='contentImg' ><img  src={contentImg} alt="contentImg" className='content-img'/></div>
        <div className='text-contents'>
          <div className='text-content'>
               <h1 className='line-height68 fs-h1 cr-white'>We Help You Make Modern Furniture</h1>
              <p className='line-height25 fs-p-s cr-hue2'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
          </div>
          <button className='content-btn'>Explore More</button>
       
        </div>
       </div>
    </ section>
  )
}

export default Content