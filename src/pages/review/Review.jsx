import React from 'react'
import './Review.css'
import ReviewImg from '../../assets/review-img.svg'
import ReviewImg2 from '../../assets/review-logo-1.svg'
import ReviewImg3 from '../../assets/review-logo-2.svg'

const Review = () => {
  return (
    <section >
       <div className="review-card">
          <div className='review-img'><img src={ReviewImg} alt="ReviewImg" /></div>
          <div className='review-text'>
            <h2 className='fs-h2 line-height41'>Our customers are verry importan to us</h2>
            <p className='fs-p-s line-height25 '>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
          </div>
          <div className='review-block flex'>
            <img src={ReviewImg2} alt="error" />
            <div>
              <p>Mh Jibon</p>
              <div className='flex'>
                <img src={ReviewImg3} alt="ReviewImg3" />
                <p>4.8</p>
              </div>
            </div>
          </div>
       </div>
    </section>
  )
}

export default Review