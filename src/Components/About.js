import React from "react";
import './css/app.css'

function About() {
  return (
    <div className="container" >
      <h1 style={{color: 'green', textAlign: 'center'}}>Welcome to Delicioursard Grocery Store!</h1>
      <p style={{fontSize: '1.2em', textAlign: 'justify', lineHeight: '1.5'}}>
        We are a family-owned and operated business that has been serving our community for over 50 years. Our store offers a wide variety of fresh produce, vegetables, fruits, and pantry essentials at affordable prices. We pride ourselves on offering high-quality products and exceptional customer service. Our dedicated team of employees works hard to ensure that our shelves are always well-stocked and that our customers are satisfied with their shopping experience. We believe in supporting local farmers and businesses and therefore a significant portion of our products are sourced from local producers. In addition to our in-store shopping options, we also offer online ordering and home delivery for your convenience. Thank you for choosing our store for all of your grocery needs. We look forward to serving you!
      </p>
      <h2 style={{color: 'blue', textAlign: 'center'}}>Our Vision</h2>
      <p style={{fontSize: '1.1em', textAlign: 'center'}}>To be the premier provider of high-quality and affordable groceries in our community.</p>
      <h2 style={{color: 'blue', textAlign: 'center'}}>Our Mission</h2>
      <p style={{fontSize: '1.1em', textAlign: 'center'}}>To provide exceptional customer service, support local farmers and businesses, and offer a convenient and seamless shopping experience for our customers.</p>
    </div>
  );
}

export default About;
