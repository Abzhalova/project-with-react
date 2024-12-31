import React from 'react'
import './Description.css'
import DescriptionImg from '../../assets/description-img.svg'
import DesLogo from '../../assets/description-logo-1.svg'
import DesLogo2 from '../../assets/description-logo-2.svg'
import DesLogo3 from '../../assets/description-logo-3.svg'

const Description = () => {
  return (
    <section>
     <div className='desc-card flex'>

        <div className='desc-img'><img src={DescriptionImg} alt="DescriptionImg" /></div>
       <div className='desc-logo'>
        <div>
            <h2 className='fs-h2 line-height40'>About Us</h2>
            <p className='fs-p-s line-height25 line-text'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
        </div>
        <div className='flex line'>
            <div><img src={DesLogo} alt="error"  className='logo-desc-img'/></div>
            <div>
                <h3 className='fs-p-m line-height25'>Best Quality</h3>
                <p className='fs-p-s line-height25'>All of our furniture uses the best materials and choices</p>
            </div>
        </div>
        <div className='flex line'>
            <div> <img src={DesLogo2} alt="error"  className='logo-desc-img'/></div>
            <div>
                <h3 className='fs-p-m line-height25'>100% Secure</h3>
                <p className='fs-p-s line-height25'>All of our furniture uses the best materials and choices</p>
            </div>
        </div>
        <div className='flex line'>
            <div> <img src={DesLogo3} alt="error"  className='logo-desc-img'/></div>
            <div>
                <h3 className='fs-p-m line-height25'>100% Secure</h3>
                <p className='fs-p-s line-height25'>All of our furniture uses the best materials and choices</p>
            </div>
        </div>
       </div>
    </div>
       
    </section>
  )
}

export default Description