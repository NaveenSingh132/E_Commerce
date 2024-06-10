import React from 'react';
import HeroSection from './eComComponents/HeroSection';
import Services from './eComComponents/Services';
import Trusted from './eComComponents/Trusted';
import FeatureProduct from './eComComponents/FeatureProduct';

function Home() {
  const data={
    'name':'Trend Mart',
  };
  return (
  <>
  <HeroSection myData={data}/>;
  <FeatureProduct/>
  <Services/>
  <Trusted/>
  </>
  );
}


export default Home;
