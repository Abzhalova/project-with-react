import React from 'react'
import Header from './header/Header'
import Content from '../pages/content/Content'
import Description from '../pages/description/Description'
import Popular from '../pages/popular/Popular'
import Furniture from '../pages/furniture/Furniture'
import Review from '../pages/review/Review'
import Logotype from '../pages/logotype/Logotype'
import Form from '../pages/form/Form'
import Footer from './footer/Footer'




const Main = () => {
  return (
    <>
       <Header />
       <Content />
       <Logotype/>
       <Description/>
       <Popular/>
       <Furniture/>
       <Review/>
       <Form />
       <Footer />
    </>
  )
}

export default Main