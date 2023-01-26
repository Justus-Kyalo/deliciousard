import React from "react";
import './css/app.css'

function About() {
  return (
    <div className="container" >
      <h1 style={{color: 'green', textAlign: 'center'}}>Welcome to Delicioursard Grocery Store!</h1>
      <p style={{fontSize: '1.2em', textAlign: 'center', lineHeight: '1.5'}}>
      Welcome to Deliciousard, your one-stop online grocery store. We are dedicated to providing you with the freshest and highest-quality products at the most competitive prices. Our goal is to make grocery shopping as convenient and stress-free as possible for you, so you can spend more time doing the things you love. Thank you.
      </p>
      <h2 style={{color: 'blue', textAlign: 'center'}}>Our Vision</h2>
      <p style={{fontSize: '1.1em', textAlign: 'center'}}>To be the premier provider of high-quality and affordable groceries in our community.</p>
      <h2 style={{color: 'blue', textAlign: 'center'}}>Our Mission</h2>
      <p style={{fontSize: '1.1em', textAlign: 'center'}}>To provide exceptional customer service, support local farmers and businesses, and offer a convenient and seamless shopping experience for our customers.</p>
    </div>
  );
}

export default About;
