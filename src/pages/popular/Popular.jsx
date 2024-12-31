import React from 'react'
import './Popular.css'
import arrow1 from '../../assets/popular-strelka-1.svg'
import arrow2 from '../../assets/popular-strelka-2.svg'
import popularImg from '../../assets/popular-img-1.svg'
import popularImg2 from '../../assets/popular-img-2.svg'
import popularImg3 from '../../assets/popular-img-3.svg'
import popularHeard from '../../assets/heart (2) 1.svg'
import popularLogo from '../../assets/popular-hard.svg'
import popularLogo2 from '../../assets/popular-logo-2.svg'

const Popular = () => {
  return (
    <section>
    <div className='popular-card'>
        <div className='flex'>
            <div  className='popular-text'>
                <h2 className='fs-h2 line-height29'>Our Popular Furniture</h2>
               <p className='fs-p-s line-height27'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
            </div>
            <div className='arrow-logos'>
                <div className='arrow-logo'> <img src={arrow1} alt="error"  /></div>
                <div className='arrow-logo'><img src={arrow2} alt="error" /></div>
            </div>
        </div>
        <div className='flex popular-contents'>
            <div className='pop-cards'>
                <div><img src={popularImg} alt="error" /></div>
                <div className='btns-cont'>
                    <h2 className='name-popular fs-p-m line-height27'>White Swan Chair </h2>
                    <h3 className=' price-popular fs-h3 line-height29 cr-circle'>$40</h3>

                    <div className='flex circles-logo'>
                        <div className='orange  ' ><img src={ popularHeard} alt="error" /></div>
                        <div className='circle-logo'><img src={popularLogo2} alt="error" /></div>
                        
                    </div>
                    <button className='btn-popular'>Buy Now</button>
                </div>
            </div>
            <div className='pop-cards' >

               <div><img src={popularImg2} alt="error" /></div>
                <div className='btns-cont'>
                    <h2 className=' name-popular fs-p-m line-height27'>White Swan Chair </h2>
                    <h3 className=' price-popular fs-h3 line-height29 cr-circle'>$40</h3>
                    <div className='flex circles-logo'>
                       <div className='circle-logo'><img src={popularLogo} alt="error" /></div>
                       <div className='circle-logo'><img src={popularLogo2} alt="error" /></div>
                    </div>
                    <button className='btn-popular'>Buy Now</button>
                </div>
            </div>
            <div className='pop-cards'>
               <div><img src={popularImg3} alt="error" /></div>
                <div className='btns-cont'>
                    <h2 className='name-popular  fs-p-m line-height27'>White Swan Chair </h2>
                    <h3 className='price-popular fs-h3  line-height29 '>$40</h3>
                    <div className='flex circles-logo'>
                       <div className='circle-logo'><img src={popularLogo} alt="error" /></div>
                       <div className='circle-logo'><img src={popularLogo2} alt="error" /></div>
                    </div>
                    <button className='btn-popular'>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Popular