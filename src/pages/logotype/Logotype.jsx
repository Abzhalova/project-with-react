import React from 'react'
import './Logotype.css'

import imgLogo from '../../assets/logotype-1.svg'
import imgLogo2 from '../../assets/logotype-2.svg'
import imgLogo3 from '../../assets/logotype-3.svg'
import imgLogo4 from '../../assets/logotype-4.svg'
import imgLogo5 from '../../assets/logotype-5.svg'
import imgLogo6 from '../../assets/logotype-6.svg'


const Logotype = () => {
  return (
   

     <section>
      <div className='logo-card'>
        <div className='logo-text flex'><h2 className='fs-h3 line-height41 cr-khaki bold'>Trusted by 20,000+ companies</h2></div>
        <div className='logo-img flex'>
          <img src={imgLogo} alt="error" />
          <img src={imgLogo2} alt="error" />
          <img src={imgLogo3} alt="error" />
          <img src={imgLogo4} alt="error" />
          <img src={imgLogo5} alt="error" />
          <img src={imgLogo6} alt="error" />
        </div>
      </div>
     
     </section>
 
   
  )
}

export default Logotype