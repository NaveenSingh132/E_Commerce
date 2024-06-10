import React from 'react'
import HeroSection from './eComComponents/HeroSection';
import { useProductContext } from './context/ProductContext'

function About() {
  const data={
    'name':'Trend Mart Ecommerce',
  };
  const { as }=useProductContext();
  return (
    <div>
       <h1>{as}</h1>
       <HeroSection myData={data}/>
    </div>
  )
}

export default About
