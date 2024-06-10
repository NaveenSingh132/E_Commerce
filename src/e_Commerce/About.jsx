import React from 'react'
import HeroSection from './eComComponents/HeroSection';
import { useProductContext } from './context/ProductContext'

function About() {
  const data={
    'name':'Trend Mart Your Destination for Cutting-Edge Gadgets!',
  };
  const { as }=useProductContext();
  return (
    <div>
       <h1>{as}</h1>
       <HeroSection myData={data}/>
       <section style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  <h3 className="common-heading">Our Brand Story</h3>
  <p style={{ lineHeight: '1.6' }}>With years of experience in the tech industry, we've curated a collection of gadgets that reflects our commitment to quality, innovation, and customer satisfaction. From smartphones to smart home devices, laptops to wearables, each product in our inventory undergoes rigorous testing to ensure it meets our high standards.</p>
</section>

<section style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
  <h3 className="common-heading">What Sets Us Apart</h3>
  <p style={{ lineHeight: '1.6' }}>What sets Trend Mart apart is our dedication to staying ahead of the curve. Our team of tech enthusiasts scours the market for the most exciting gadgets, ensuring that you have access to the latest trends and innovations before they hit mainstream. Plus, our commitment to affordability means you can enjoy cutting-edge technology without breaking the bank.</p>
</section>

<section style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
  <h3 className="common-heading">Call to Action</h3>
  <p style={{ lineHeight: '1.6' }}>Ready to explore the world of gadgets? Browse our collection now and discover the possibilities with Trend Mart!</p>
</section>

<section style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
  <h3 className="common-heading">Testimonials (Optional)</h3>
  <p style={{ lineHeight: '1.6' }}>You don't have to take our word for it – hear what our customers have to say about their experience with Trend Mart: [Include a few positive testimonials or reviews].</p>
</section>

<section style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
  <h3 className="common-heading">Conclusion</h3>
  <p style={{ lineHeight: '1.6' }}>At Trend Mart, we're more than just a retailer – we're a community of tech enthusiasts dedicated to exploring the endless possibilities of technology. Join us on our journey and experience the future today!</p>
</section>

    </div>
  )
}

export default About
